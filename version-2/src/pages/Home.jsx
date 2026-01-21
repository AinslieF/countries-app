// Imports the CountryCard component so this page can display
// individual country cards for each country in the data
import CountryCard from "../components/CountryCard";

/**
 * Home page
 *
 * What this page does:
 * ~ This is the main page you see when the app loads
 * ~ It receives country data from App.jsx as a prop called ({ countriesData })
 * ~ It shows all countries using CountryCard components
 */
function Home({ countriesData }) {
  // Makes a copy of the countries array and sorts it alphabetically
  // This keeps the original data unchanged
  // Sorting the API data
  const sortedCountries = [...countriesData].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    // Main wrapper for everything on the Home page
    <section className="home">
      {/*
        Top section with the search and filter
        Version 0 notes:
        ~ These inputs are only for design right now
        ~ They do not actually filter or search yet
      */}
      <div className="home-controls">
        {/* Input where the user will eventually search for a country */}
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          aria-label="Search for a country"
        />

        {/* Dropdown where the user will eventually filter by region */}
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
        Grid that holds all country cards
        One CountryCard is created for each country in the data
        Rendering the API data
      */}
      <div className="cards-grid">
        {sortedCountries.map((country) => (
          <CountryCard
            /*
              React requires a unique "key" for each item in a list.
              We use the country's 3-letter code (cca3) because:
              ~ It is unique
              ~ It does not change
              ~ It is safer than using an array index
            */
            key={country.cca3}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
