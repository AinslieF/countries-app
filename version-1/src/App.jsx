import "./App.css";
// Imports routing tools so the app can navigate between pages using URLs
import { Routes, Route, Link } from "react-router-dom";

// Imports React hooks so we can store data and run code when the app loads
import { useEffect, useState } from "react";

// Imports the page components
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

// Imports local country data for Version 0 (used as a backup)
import localData from "../localData";

/**
 * App component
 *
 * This is the main component for the entire app.
 *
 * What it does:
 * ~ Controls the overall layout of the app
 * ~ Sets up routing between pages
 * ~ Displays the header on every page
 * ~ Shows the correct page based on the URL
 */
function App() {
  // Stores the list of countries from the API
  // Starts as an empty array because we don’t have data yet
  const [countries, setCountries] = useState([]);

  // Tracks whether the data is still loading
  const [isLoading, setIsLoading] = useState(true);

  // Stores an error message if the API fails
  const [error, setError] = useState(null);

  // This function fetches country data from the REST Countries API
  // It uses async/await, just like the example we did in class
  const fetchCountries = async () => {
    try {
      // Resets loading and error state before fetching
      setIsLoading(true);
      setError(null);

      // API URL with only the fields we need
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders";

      // Sends a request to the API and waits for the response
      const res = await fetch(url);

      // If the response is not OK, throw an error
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      // Converts the API response into usable JavaScript data
      const data = await res.json();

      // Saves the API data into state
      setCountries(data);
    } catch (err) {
      // If the API fails, use this local backup data instead
      setCountries(localData);
      setError("API is down — showing local backup data.");
    } finally {
      // Stops the loading state once everything finishes
      setIsLoading(false);
    }
  };

  // useEffect runs when the app first loads
  // The empty dependency array means it only runs ONCE
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      {/*
        Original heading kept as a comment for reference.
        I replaced it with a styled header instead.
        <h1>Countries App</h1>
      */}

      {/* Header that stays the same on every page */}
      <header className="header">
        <div className="header-left">
          {/* App title that links back to the Home page */}
          <Link to="/" className="header-logo">
            Where in the world?
          </Link>
        </div>

        {/* Navigation links on the right side of the header */}
        <nav className="header-right">
          <Link to="/saved" className="header-link">
            Saved Countries
          </Link>
        </nav>
      </header>

      {/* Main section where different pages are rendered */}
      <main className="main">
        {/* Shows loading or error messages if needed */}
        {isLoading && <p>Loading countries...</p>}
        {error && <p>{error}</p>}

        <Routes>
          {/*
            Home page route
            ~ Passes country data down as props
            ~ Displays the list of all countries
          */}
          <Route
            path="/"
            element={<Home countriesData={countries} />}
          />

          {/*
            Saved Countries route
            ~ Currently a placeholder page in Version 0
          */}
          <Route path="/saved" element={<SavedCountries />} />

          {/*
            Country Detail route
            ~ Uses a dynamic URL parameter (countryCode)
          */}
          <Route
            path="/country/:countryCode"
            element={<CountryDetail />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
