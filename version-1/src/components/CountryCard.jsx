import { Link } from "react-router-dom";

/**
 * CountryCard component
 *
 * This component shows information for ONE country.
 * It gets reused on the Home page to display all countries.
 *
 * What it shows:
 * ~ The country’s flag
 * ~ The country’s name
 * ~ Population
 * ~ Capital
 * ~ Region
 */
function CountryCard({ country }) {
  // Pulls out specific data from the country object
  // This makes the JSX below easier to read
  const { name, flags, population, capital, region } = country;

  return (
    // Link makes the entire country card clickable
    // It sends the user to the dynamic Country Detail page
    <Link to={`/country/${country.cca3}`}>
      {/* Wraps one country card in an article element */}
      {/* Each article represents one country */}
      <article className="country-card">
        {/* Displays the country’s flag image */}
        <img
          className="country-flag"
          src={flags?.png} // prevents errors if the flag image is missing
          alt={`${name.common} flag`} // descriptive text for screen readers
        />

        {/* Container for the country’s text information */}
        <div className="country-card-body">
          {/* Displays the country’s common name */}
          <h2 className="country-name">{name.common}</h2>

          {/* Displays the population */}
          <p className="country-detail">
            <span className="label">Population:</span>{" "}
            {population.toLocaleString()} {/* adds commas to large numbers */}
          </p>

          {/* Only shows a capital if one exists. Some countries don’t have capitals, so this prevents errors.*/}
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
    </Link>
  );
}

export default CountryCard;
