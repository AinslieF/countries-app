/**
 * SavedCountries page
 *
 * What this page is for in Version 0:
 * ~ This page proves that routing works when Saved Countries is clicked
 * ~ It shows the basic layout we will build on later
 *
 * In future versions, this page will:
 * ~ Show a list of countries the user has saved
 * ~ Include a working form to add profile information. Form now included!
 */
function SavedCountries() {
  return (
    // Main wrapper for the Saved Countries page
    <section className="saved-page">
      <h1>My Saved Countries</h1>

      {/*
          UPDATED based on Nicole's feedback:
        ~ In future versions, saved countries will be ABOVE the form
        ~ So the saved countries section comes first in the JSX
        ~ The CSS will stack everything vertically (not side by side columns)
      */}
      <div className="saved-layout">
        {/* Top section saved countries future feature */}
        <div className="saved-list-column">
          {/* Saved countries will be displayed here later */}
        </div>

        {/* Bottom section will be the user profile form */}
        <div className="profile-column">
          {/* Section title for the profile form */}
          <h2 className="profile-title">My Profile</h2>

          {/* Profile form (not functional yet in Version 0 and I didn't make it functional yet in Version 1) */}
          <form className="profile-form">
            {/* Input for the user's full name */}
            <input
              type="text"
              className="form-input"
              placeholder="Full name"
              aria-label="Full name"
            />

            {/* Input for the user's email */}
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              aria-label="Email"
            />

            {/*
              Country's input 
            */}
            <input
              type="text"
              className="form-input"
              placeholder="Country"
              aria-label="Country"
            />

            {/* Text area where the user can write a short bio */}
            <textarea
              className="form-textarea"
              placeholder="Bio"
              aria-label="Bio"
            />

            {/*
              Buttons section:
              ~ Back button goes to the previous page
              ~ Submit button will eventually save the form data. Not yet functional :)
            */}
            <div className="form-buttons">
              <button
                type="button"
                className="form-submit back-btn"
                onClick={() => window.history.back()}
              >
                Back
              </button>

              <button type="submit" className="form-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SavedCountries;
