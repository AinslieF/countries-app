import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// Page components
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

// Local country data used for Version 0
import localData from "./localData"; // uses my localData.js

/**
 * App component
 *
 * Purpose:
 * - Acts as the main layout for the application
 * - Sets up routing for all pages
 * - Renders the shared header and main content area
 */
function App() {
  return (
    <>
      {/* 
        Original heading kept as a comment for reference:
        <h1>Countries App</h1>
      */}

      {/* Header with navigation links */}
      <header className="header">
        <div className="header-left">
          {/* Clicking this title routes back to the Home page */}
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

      {/* Main content area where routed pages are displayed */}
      <main className="main">
        <Routes>
          {/* Home page: receives country data as props */}
          <Route
            path="/"
            element={<Home countriesData={localData} />}
          />

          {/* Saved Countries page (placeholder for Version 0) */}
          <Route path="/saved" element={<SavedCountries />} />

          {/* Country Detail page (route exists, content that will be added later) */}
          <Route path="/country/:countryCode" element={<CountryDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
