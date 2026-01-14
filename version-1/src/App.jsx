import "./App.css";
// Imports routing tools so the app can navigate between pages using URLs
import { Routes, Route, Link } from "react-router-dom";

// Imports the page components
import Home from "./pages/Home";
import SavedCountries from "./pages/SavedCountries";
import CountryDetail from "./pages/CountryDetail";

// Imports local country data for Version 0
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
        <Routes>
          {/*
            Home page route
            ~ Passes country data down as props
            ~ Displays the list of all countries
          */}
          <Route
            path="/"
            element={<Home countriesData={localData} />}
          />

          {/*
            Saved Countries route
            ~ Currently a placeholder page in Version 0
            ~ Will be expanded in later versions
          */}
          <Route path="/saved" element={<SavedCountries />} />

          {/*
            Country Detail route
            ~ Uses a dynamic URL parameter (countryCode)
            ~ Page content will be built in future versions
          */}
          <Route path="/country/:countryCode" element={<CountryDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
