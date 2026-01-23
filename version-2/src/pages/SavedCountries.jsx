// ~NEW~ Import React hooks so we can store form data and run code on page load
import { useState, useEffect } from "react";

/**
 * SavedCountries page
 *
 * Version 2 updates:
 * ~ Allows user to submit profile form data to the backend
 * ~ Gets the newest user from the backend
 * ~ Displays {Welcome} message with {name}! if a user already exists
 */
function SavedCountries() {
  // ~NEW~ State to control the form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  // ~NEW~ Stores the newest user returned from the API
  const [newestUserData, setNewestUserData] = useState(null);

  // ~NEW~ Updates form state when the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // ~NEW~ Updates only the field that changed
    setFormData({ ...formData, [name]: value });
  };

  // ~NEW~ Handles submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // ~NEW~ Just shows the form data in the console for now
    console.log(formData);

    // ~NEW~ Resets the form after submission
    setFormData({
      fullName: "",
      email: "",
      country: "",
      bio: "",
    });
  };

  // ~NEW~ Fetches the most recently added user
  const getNewestUserData = async () => {
    try {
      // ~NEW~ Sends [GET] request to the backend
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });

      const data = await response.json();

      // ~NEW~ Saves the newest user (first item in the array)
      setNewestUserData(data[0]);
    } catch (error) {
      console.error("Error fetching newest user:", error);
    }
  };

  // ~NEW~ Runs once when the page loads
  useEffect(() => {
    getNewestUserData();
  }, []);

  return (
    // Main wrapper for the Saved Countries page
    <section className="saved-page">
      <h1>My Saved Countries</h1>

      {/* NEW~ Shows welcome message if the user exists */}
      {newestUserData && <h2>Welcome, {newestUserData.name}!</h2>}

      <div className="saved-layout">
        {/* Saved countries section (still empty in Version 2) */}
        <div className="saved-list-column"></div>

        {/* Profile form section */}
        <div className="profile-column">
          <h2 className="profile-title">My Profile</h2>

          {/* NEW~ Form is now controlled and functional */}
          <form className="profile-form" onSubmit={handleSubmit}>
            {/* NEW~ Controlled input (value comes from React state) */}
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            {/* NEW~ Controlled input */}
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            {/* NEW~ Controlled input */}
            <input
              type="text"
              name="country"
              className="form-input"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />

            {/* NEW~ Controlled textarea */}
            <textarea
              name="bio"
              className="form-textarea"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleInputChange}
              required
            />

            <div className="form-buttons">
              <button
                type="button"
                className="form-submit back-btn"
                onClick={() => window.history.back()}
              >
                Back
              </button>

              {/* NEW~ Submit just logs form data & resets inputs for now */}
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
