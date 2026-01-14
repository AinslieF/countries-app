/**
 * CountryDetail page
 *
 * This page is part of Version 0.
 *
 * What it does right now:
 * ~ Acts as a placeholder page
 * ~ Helps confirm that routing works when navigating to a country detail page
 *
 * What it will do in later versions:
 * ~ Use the country code from the URL
 * ~ Look up or fetch detailed data for one country
 * ~ Show full details about that country
 */
function CountryDetail() {
  return (
    // Uses the shared `.page` class so this page matches the layout of other pages
    <section className="page">
      <h1>Country Detail</h1>

      {/* Placeholder text to explain what this page will do later */}
      <p>
        This page will show detailed info about a single country in a later
        version of the app.
      </p>
    </section>
  );
}

export default CountryDetail;
