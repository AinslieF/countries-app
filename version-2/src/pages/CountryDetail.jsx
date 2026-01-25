// Imports useParams so we can read the dynamic value from the URL (ex ~ /country/AFG)
import { useParams } from "react-router-dom";

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

  // If the country is not found (example: data not loaded yet),  then show a simple message
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

  return (
    // This wrapper lets us style the detail page like the Figma design
    <section className="detail-page">
      {/* Back button at the top like design */}
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
            Not functional yet.
          */}
          <button type="button" className="detail-save-btn">
            Save
          </button>

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
