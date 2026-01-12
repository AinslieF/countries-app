/**
 * CountryDetail page
 *
 * Version 0 purpose:
 * - Acts as a placeholder page
 * - Confirms routing works when navigating to a country detail route
 *
 * In my future versions it will:
 * - Read route parameters (country code)
 * - Fetch or look up detailed country data
 * - Display full country information
 */
function CountryDetail() {
  return (
    // Uses the shared `.page` class for consistent layout styling
    <section className="page">
      <h1>Country Detail</h1>

      {/* Temporary placeholder content for Version 0 */}
      <p>
        This page will show detailed info about a single country in a later
        version of the app.
      </p>
    </section>
  );
}

export default CountryDetail;
