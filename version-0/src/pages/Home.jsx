import CountryCard from "../components/CountryCard";

/**
 * Home page
 *
 * Purpose:
 * - Displays the main list of countries
 * - Receives country data from App.jsx via props
 * - Renders a grid of reusable CountryCard components
 */
function Home({ countriesData }) {
  // Creates a sorted copy of the countries array
  // Countries are sorted alphabetically by their common name
  // This does NOT modify the original data
  const sortedCountries = [...countriesData].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    // Main container for the Home page
    <section className="home">
      {/* 
        Top controls section
        Version 0:
        - Search input and region filter are visual only
        - No filtering logic is implemented yet
      */}
      <div className="home-controls">
        {/* Search input */}
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          aria-label="Search for a country"
        />

        {/* Region filter dropdown */}
        <select className="region-select" aria-label="Filter by region">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* 
        Grid container for all country cards
        One CountryCard is rendered for each country in the data
      */}
      <div className="cards-grid">
        {sortedCountries.map((country) => (
          <CountryCard
            // Use cca3 as a unique key (fallback to name if needed)
            key={country.cca3 ?? country.name.common}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
