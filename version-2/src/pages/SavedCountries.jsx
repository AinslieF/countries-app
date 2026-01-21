/**
 * SavedCountries page
 *
 * What this page is for in Version 1:
 * ~ Confirms routing works when "Saved Countries" is clicked
 * ~ Displays the Saved Countries page layout
 * ~ Includes a styled profile form (not functional yet)
 *
 * In my future versions, this page will:
 * ~ Show a list of countries the user has saved
 * ~ Allow users to save profile information
 */
function SavedCountries() {
  return (
    // Main wrapper for the Saved Countries page
    <section className="saved-page">
      {/* Page heading */}
      <h1>My Saved Countries</h1>

      {/*
        Layout container for this page

        Instructor feedback applied :)
        ~ Saved countries should appear ABOVE the profile form
        ~ Content should be stacked vertically (not side by side columns)
        ~ The order in JSX now matches the future layout
      */}
      <div className="saved-layout">
        {/* 
          Saved countries section ~
          This section is intentionally empty for now.
          In future versions, saved country cards will appear here.
        */}
        <div className="saved-list-column">
          {/* Saved countries will be displayed here later */}
        </div>

        {/* 
          Profile form section
          This is where the user enters their profile information
        */}
        <div className="profile-column">
          {/* Section title for the profile form */}
          <h2 className="profile-title">My Profile</h2>

          {/* 
            Profile form
            ~ Styled according to the Figma design
            ~ Not functional yet (no state or submit handling in Version 1)
          */}
          <form className="profile-form">
            {/* Input for the user's full name */}
            <input
              type="text"
              className="form-input"
              placeholder="Full name"
              aria-label="Full name"
            />

            {/* Input for the user's email address */}
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              aria-label="Email"
            />

            {/* 
              Country input
              A text input is used instead of a dropdown
              to allow flexibility in future versions !
            */}
            <input
              type="text"
              className="form-input"
              placeholder="Country"
              aria-label="Country"
            />

            {/* Text area for the user's bio */}
            <textarea
              className="form-textarea"
              placeholder="Bio"
              aria-label="Bio"
            />

            {/*
              Form action buttons
              ~ Back button returns the user to the previous page
              ~ Submit button is for future functionality
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
