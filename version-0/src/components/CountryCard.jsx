/**
 * CountryCard component
 *
 * Purpose is to:
 * ~ Display information for ONE country
 * ~ Be used repeatedly on the Home page inside of a grid
 *
 * Data shown:
 * ~ Country flag
 * ~ Country name
 * ~ Population
 * ~ Capital
 * ~ Region
 */
function CountryCard({ country }) {
  // Destructures or pulls out specific data we need from the country object
  // This keeps the JSX below cleaner and easier to read
  const { name, flags, population, capital, region } = country;

  return (
    // Wraps one country card in an <article> element for HTML and each article represents one country
    <article className="country-card"> 
      {/* Country flag image displayed here */}
      <img
        className="country-flag"
        src={flags?.png} // prevents errors if the flag image is missing
        alt={`${name.common} flag`} // descriptive alt text for readers
      />

      {/* Card content container for the country's text info */}
      <div className="country-card-body">
        {/* Country name (common name) being displayed here */}
        <h2 className="country-name">{name.common}</h2>

        {/* Shows the population */}
        <p className="country-detail">
          <span className="label">Population:</span>{" "}
          {population.toLocaleString()} {/* adds commas to large numbers */}
        </p>

        {/* Capital (some countries may not have one) so it only shows a capital if one exists otherwise N/A */}
        <p className="country-detail">
          <span className="label">Capital:</span>{" "}
          {capital && capital.length > 0 ? capital[0] : "N/A"}
        </p>

        {/* Displays the region of the world */}
        <p className="country-detail">
          <span className="label">Region:</span> {region}
        </p>
      </div>
    </article>
  );
}

export default CountryCard;
