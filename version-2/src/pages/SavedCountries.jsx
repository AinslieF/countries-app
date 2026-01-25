// ~NEW~ Import React hooks so we can store data and run code on page load
import { useState, useEffect } from "react";

// NEW NEW ~ we need CountryCard to show the full country card for saved countries
import CountryCard from "../components/CountryCard"; // NEW ~ reused same card from Home page

/**
 * SavedCountries page
 *
 * Version 2 updates:
 * ~ Gets newest user from backend
 * ~ Displays welcome message if user exists
 * ~ Retrieves saved countries (GET only until we do POST in class)
 * ~ Displays saved countries above the form
 */
function SavedCountries({ countriesData }) { // NEW ~ receives countries data so we can match saved names
  // ~NEW~ State to control the form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    bio: "",
  });

  // ~NEW~ Stores the newest user returned from the API
  const [newestUserData, setNewestUserData] = useState(null);

  // ~NEW~ Stores saved countries returned from the API
  const [savedCountries, setSavedCountries] = useState([]); // NEW ~ holds saved countries from backend

  // ~NEW~ Updates form state when the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // ~NEW~ Updates only the field that changed
    setFormData({ ...formData, [name]: value });
  };

  // ~NEW~ Handles submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // ~NEW~ Just logs form data for now (NO POST yet NEXT WEEK!!!!!!)
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
      // ~NEW~ Sends GET request to backend
      const response = await fetch("/api/get-newest-user", {
        method: "GET",
      });

      // Converts the JSON response into usable JavaScript data
      const data = await response.json();

      // ~NEW~ Saves the first (newest) user in state (so I am not always going to be the newest user)
      setNewestUserData(data[0]);
    } catch (error) {
      console.error("Error fetching newest user:", error);
    }
  };

  // ~NEW~ Fetches all saved countries
  const getSavedCountries = async () => {
    try {
      // ~NEW~ Sends GET request to backend
      const response = await fetch("/api/get-all-saved-countries", {
        method: "GET",
      });

      const data = await response.json();

      // ~NEW~ Saves saved countries array into state
      setSavedCountries(data);
    } catch (error) {
      console.error("Error fetching saved countries:", error);
    }
  };

  // ~NEW~ Runs once when the page loads
  useEffect(() => {
    getNewestUserData();
    getSavedCountries();
  }, []);

  return (
    // Main wrapper for the Saved Countries page
    <section className="saved-page">
      <h1>My Saved Countries</h1>

      {/* ~NEW~ Shows welcome message if user exists */}
      {newestUserData && <h2>Welcome, {newestUserData.name}!</h2>}

      <div className="saved-layout">
        {/* ~NEW~ Saved countries section */}
        <div className="saved-list-column">
          {/* NEW NEW ~ loops through saved countries from backend */}
          {savedCountries.map((savedCountry) => {
            // NEW NEW ~ finds the full country object that matches the saved country name
            const matchedCountry = countriesData.find(
              (country) => country.name.common === savedCountry.country_name
            );

            // New NEW ~ renders the same CountryCard used on the Home page
            return (
              <CountryCard
                key={matchedCountry.name.common} // NEW ~ uses the country name as a unique key for React
                country={matchedCountry} // NEW ~ passes full country data into card
              />
            );
          })}
        </div>

        {/* Profile form section */}
        <div className="profile-column">
          <h2 className="profile-title">My Profile</h2>

          {/* ~NEW~ Controlled form (NO POST YET) */}
          <form className="profile-form" onSubmit={handleSubmit}>
            {/* ~NEW~ Controlled input */}
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            {/* ~NEW~ Controlled input */}
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            {/* ~NEW~ Controlled input */}
            <input
              type="text"
              name="country"
              className="form-input"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />

            {/* ~NEW~ Controlled textarea */}
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

              {/* ~NEW~ Submit only logs & resets (no POST yet) */}
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
