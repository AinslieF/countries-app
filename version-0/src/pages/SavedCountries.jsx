/**
 * SavedCountries page
 *
 * Version 0 purpose:
 * ~ Acts as a placeholder page
 * ~ Confirms routing works for the "Saved Countries" link
 *
 * My future versions will:
 * ~ Display a list of saved countries
 * ~ Include a form to add new saved countries/profile info
 */
function SavedCountries() {
  return (
    // Uses the shared `.page` class for consistent layout styling
    <section className="page">
      <h1>Saved Countries</h1>

      {/* Placeholder content for Version 0 */}
      <p>
        This page will eventually show your saved countries and a form to add
        more. For Version 0, it’s just a placeholder.
      </p>
    </section>
  );
}

export default SavedCountries;
