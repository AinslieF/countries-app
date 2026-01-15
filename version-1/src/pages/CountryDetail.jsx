// Import useParams so we can read the dynamic value from the URL (ex: /country/AFG)
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

// ✅ UPDATED: We are now receiving the countriesData prop from App.jsx
function CountryDetail({ countriesData }) {
  // Gets the dynamic part of the URL (the countryCode)
  // Example: if the URL is /country/AFG then countryCode is "AFG"
  const { countryCode } = useParams();

  // Finds the one country that matches the country code in the URL
  // We use cca3 because it is the official unique 3-letter code for each country
  const country = countriesData?.find((c) => c.cca3 === countryCode);

  // If the country is not found (ex: data not loaded yet), show a simple message
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

        {/* NEW: simple message while the country data is loading or missing */}
        <p>Loading country details...</p>
      </section>
    );
  }

  // Pulls out just the pieces of data we want to display
  // This keeps the JSX cleaner and easier to read
  const { name, flags, population, capital, region } = country;

  return (
    // Uses the shared `.page` class so this page matches the layout of other pages
    <section className="page">
      <h1>Country Detail</h1>

      {/* Placeholder text to explain what this page will do later */}
      <p>
        This page will show detailed info about a single country in a later
        version of the app.
      </p>

      {/* NEW: Shows the actual country name from the API */}
      <h2>{name?.common}</h2>

      {/* NEW: Shows the flag image from the API */}
      <img
        src={flags?.png}
        alt={flags?.alt ?? `${name?.common} flag`}
        style={{ width: "100%", maxWidth: "420px", borderRadius: "8px" }}
      />

      {/* NEW: Shows the population (with commas) */}
      <p>
        <strong>Population:</strong> {population?.toLocaleString()}
      </p>

      {/* NEW: Shows the region */}
      <p>
        <strong>Region:</strong> {region}
      </p>

      {/* NEW: Shows the capital if it exists, otherwise shows N/A */}
      <p>
        <strong>Capital:</strong>{" "}
        {capital && capital.length > 0 ? capital[0] : "N/A"}
      </p>
    </section>
  );
}

export default CountryDetail;
