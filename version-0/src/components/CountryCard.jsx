/**
 * CountryCard component
 *
 * Purpose is to:
 * - Display information for ONE country
 * - Used repeatedly on the Home page inside of a grid
 *
 * Data shown:
 * - Country flag
 * - Country name
 * - Population
 * - Capital
 * - Region
 */
function CountryCard({ country }) {
  // Destructures the properties we need from the country object
  // This keeps the JSX below cleaner and easier to read
  const { name, flags, population, capital, region } = country;

  return (
    // Each country is wrapped in an <article> for HTML
    <article className="country-card">
      {/* Country flag image */}
      <img
        className="country-flag"
        src={flags?.png} // optional chaining in case flags are missing
        alt={`${name.common} flag`} // accessible alt text
      />

      {/* Card content container */}
      <div className="country-card-body">
        {/* Country name (common name) */}
        <h2 className="country-name">{name.common}</h2>

        {/* Population */}
        <p className="country-detail">
          <span className="label">Population:</span>{" "}
          {population.toLocaleString()} {/* formats large numbers */}
        </p>

        {/* Capital (some countries may not have one) */}
        <p className="country-detail">
          <span className="label">Capital:</span>{" "}
          {capital && capital.length > 0 ? capital[0] : "N/A"}
        </p>

        {/* Region */}
        <p className="country-detail">
          <span className="label">Region:</span> {region}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
