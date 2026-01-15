/**
 * CountryDetail page
 *
 * Version 0 purpose:
 * ~ Acts as a placeholder page
 * ~ Helps confirm that routing works when navigating to a country detail page
 *
 * In my future versions it will:
 * ~ Read route parameters by using the country code from the URL
 * ~ Fetch or look up detailed country data for one country
 * ~ Show full details about that country
 */
function CountryDetail() {
  return (
    // Uses the shared `.page` class for consistent layout styling
    <section className="page">
      <h1>Country Detail</h1>

      {/* Temporary placeholder text for Version 0 explaining what this page will do later */}
      <p>
        This page will show detailed info about a single country in a later
        version of the app.
      </p>
    </section>
  );
}

export default CountryDetail;
