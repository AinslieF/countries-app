// Imports useParams so we can read the dynamic value from the URL (eg ~ /country/AFG)
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // added today~ we need state (viewCount) & useEffect to run POST on page load

/**
 * CountryDetail page
 *
 * This page is part of Version 0.
 *
 * What it does right now:
 * ~ Acts as a placeholder page
 * ~ Helps confirm that routing works when navigating to a country detail page
 * ~ Receives country data as props, but does not use it yet
 *
 * What it will do in later versions:
 * ~ Use the country code from the URL
 * ~ Look up or fetch detailed data for one country
 * ~ Show full details about that country
 */

// UPDATED! We are now receiving the countriesData prop from App.jsx
function CountryDetail({ countriesData }) {
  // Gets the dynamic part of the URL (the countryCode)
  // Example ~ if the URL is /country/AFG then countryCode is "AFG"
  const { countryCode } = useParams();

  // Finds the one country that matches the country code in the URL
  // We use cca3 because it is the official unique 3-letter code for each country
  const country = countriesData?.find((c) => c.cca3 === countryCode);

  // added today ~ stores how many times this country has been viewed
  const [viewCount, setViewCount] = useState(null); // added today ~ starts as null until the backend sends a number

  // If the country is not found (example: data not loaded yet), then show a simple message
  // This prevents the page from crashing while data is loading
  if (!country) {
    return (
      // Uses the shared `.page` class so this page matches the layout of other pages
      <section className="page">
        <h1>Country Detail</h1>

        {/* Placeholder text to explain what this page will do later */}
        <p>
          This page will show detailed info about a single country in a later
          version of the app.
        </p>

        {/* Simple message while the country data is loading or missing */}
        <p>Loading country details...</p>
      </section>
    );
  }

  // Pulls out just the pieces of data we want to display
  // This keeps the JSX cleaner and easier to read
  const { name, flags, population, capital, region } = country;

  const handleSaveCountry = async () => {
    // added today ~ runs when Save button is clicked
    const response = await fetch("/api/save-one-country", {
      // sends POST request to backend
      method: "POST", // POST means we are sending data to store
      headers: {
        "Content-Type": "application/json", // tells backend we are sending JSON
      },
      body: JSON.stringify({
        country_name: name.common, // backend expects the country's common name
      }),
    });

    const result = await response.text(); // backend then sends back a text message
    console.log("save result", result); // added today ~ shows success message in the console
  };

  // added today ~ updates the view count in the backend and gets the new count back
  const updateCountryCount = async () => {
    // added today ~ function that runs the country count POST request
    const response = await fetch("/api/update-one-country-count", {
      // added today ~ endpoint that updates (increments) the country count
      method: "POST", // added today ~ POST because we are updating/storing data
      headers: {
        "Content-Type": "application/json", // added today ~ tells backend we are sending JSON
      },
      body: JSON.stringify({
        country_name: name.common, // added today ~ backend needs the country name to track the count
      }),
    });

    const data = await response.json(); // added today ~ converts JSON response into JavaScript data
    setViewCount(data.count); // added today ~ saves the returned count number into React state
  };

  // added today ~ runs when the page loads or when the countryCode changes
  useEffect(() => {
    updateCountryCount(); // added today ~ triggers the POST request when you view a country page
  }, [countryCode]); // added today ~ reruns when user clicks into a different country

  // added today ~ if/else logic
  let viewCountJSX = null; // added today ~ default is nothing until we have a real count
  if (viewCount === null) {
    // added today ~ if count has not loaded yet, show nothing
    viewCountJSX = null; // added today ~ keeps the UI clean while data is loading
  } else {
    // added today ~ if count exists, show it on the page
    viewCountJSX = (
      // added today ~ JSX for the views row
      <p className="detail-row">
        {/* added today ~ matches my other detail rows */}
        <span className="detail-label">Views:</span> {viewCount}
        {/* added today ~ displays the count number from the backend */}
      </p>
    );
  }

  return (
    // This wrapper lets us style the detail page
    <section className="detail-page">
      {/* Back button at the top */}
      <button
        type="button"
        className="detail-back-btn"
        // Goes back to the previous page the user was on
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      {/*
        Layout container:
        ~ Desktop: two columns (flag on the left, details on the right)
        ~ Mobile: stacks (flag on top, details below)
      */}
      <div className="detail-layout">
        {/* LEFT side (or top on mobile) shows the flag image */}
        <div className="detail-flag-wrap">
          <img
            className="detail-flag"
            // Uses the flag image from the API
            src={flags?.png}
            // Uses alt text from API if available, otherwise uses the country name
            alt={flags?.alt ?? `${name?.common} flag`}
          />
        </div>

        {/* RIGHT side (or bottom on mobile) shows the country info */}
        <div className="detail-info">
          {/* Country name */}
          <h1 className="detail-name">{name?.common}</h1>

          {/*
            Save button under the country name.
            Now functional.
          */}
          <button
            type="button"
            className="detail-save-btn"
            onClick={handleSaveCountry}
          >
            Save
          </button>

          {/* added today ~ shows the view count row (only appears after backend returns a number) */}
          {viewCountJSX} {/* added today ~ inserts the if/else result here */}

          {/* Country details list */}
          <p className="detail-row">
            <span className="detail-label">Population:</span>{" "}
            {population?.toLocaleString()}
          </p>

          <p className="detail-row">
            <span className="detail-label">Region:</span> {region}
          </p>

          {/* Only shows a capital if one exists. Some countries don’t have capitals, so this prevents errors.*/}
          <p className="detail-row">
            <span className="detail-label">Capital:</span>{" "}
            {capital && capital.length > 0 ? capital[0] : "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CountryDetail;
