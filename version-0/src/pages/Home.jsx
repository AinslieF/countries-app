import CountryCard from "../components/CountryCard";

/**
 * Home page
 *
 * Purpose:
 * ~ This is  the main page I see when the app loads it displays the main list of countries
 * ~ Receives country data from App.jsx via props
 * ~ Renders/shows a grid of all countries using reusable CountryCard components
 */
function Home({ countriesData }) {
  // Creates a sorted copy of the countries array and countries are sorted alphabetically by their common name
  // This does NOT modify the original data/keeps it unchanged
  const sortedCountries = [...countriesData].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    // Main wrapper/container for everything on the Home page
    <section className="home">
      {/* 
        The top section with the search and filter
        ~ These inputs are only for design purposes right now. No functionality
        ~ They do not filter or search yet
      */}
      <div className="home-controls">
        {/* Search input is where the user will eventually search for country */}
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
        Grid container thats holds all country cards
        One CountryCard is rendered/created for each country in the data
      */}
      <div className="cards-grid">
        {sortedCountries.map((country) => (
          <CountryCard
            // React needs a unique key for each item in a list so I used the country's 3-letter code because it's unique
            // If that code is missing , it will fall back to the country's name so React doesn't throw an error
            key={country.cca3 ?? country.name.common}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
