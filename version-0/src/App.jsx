import "./App.css";
// Imports routing tools so the app can navigate between pages using URLs
import { Routes, Route, Link } from "react-router-dom";

// Imports page components
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

// Imports local country data used for Version 0
import localData from "./localData"; // uses my localData.js

/**
 * App component
 * 
 * This is the main component for the entire app
 *
 * Purpose:
 * ~ Controls the overall layout of the app
 * ~ Sets up routing for/between all pages
 * ~ Renders/displays the header on every page
 * ~ Shows the correct page based on the URL
 */
function App() {
  return (
    <>
      {/* 
        Original heading kept as a comment for reference. I replaced it with a styled header instead
        <h1>Countries App</h1>
      */}

      {/* Header with navigation links. Stays the same on every page */}
      <header className="header">
        <div className="header-left">
          {/* Clicking this title re routes back to the Home page */}
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

      {/* Main section where different pages are displayed */}
      <main className="main">
        <Routes>
          {/* Home page: passes country data down as props and shows all the countries */}
          <Route
            path="/"
            element={<Home countriesData={localData} />}
          />

          {/* Saved Countries page (placeholder for Version 0, will be expanded later) */}
          <Route path="/saved" element={<SavedCountries />} />

          {/* Country Detail page (uses a dynamic URL parameter {countryCode} will keep building content in later versions) */}
          <Route path="/country/:countryCode" element={<CountryDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
