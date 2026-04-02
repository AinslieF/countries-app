import express from "express";
import pg from "pg";
import config from "./config.js";

// connects to database
const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});

// creates server
const app = express();

// allows JSON
app.use(express.json());

// runs server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// ---------------------------------
// Helper Functions
// ---------------------------------

// adds one user
async function addOneUser(name, country_name, email, bio) {
  const result = await db.query(
    `INSERT INTO users (name, country_name, email, bio)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [name, country_name, email, bio]
  );
  return result.rows[0];
}

// gets the newest user
async function getNewestUser() {
  const result = await db.query(
    "SELECT * FROM users ORDER BY user_id DESC LIMIT 1"
  );
  return result.rows[0];
}

// saves one country
async function saveOneCountry(country_name) {
  const result = await db.query(
    `INSERT INTO countries (country_name, count)
     VALUES ($1, 0)
     RETURNING *`,
    [country_name]
  );
  return result.rows[0];
}

// gets all countries
async function getAllSavedCountries() {
  const result = await db.query("SELECT * FROM countries");
  return result.rows;
}

// updates country count
async function updateCountryCount(country_name) {
  const result = await db.query(
    "INSERT INTO country_counts (country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = country_counts.count + 1 RETURNING count",
    [country_name]
  );
  return result.rows[0];
}


// ---------------------------------
// API Endpoints
// ---------------------------------

// POST adds user
app.post("/add-one-user", async (req, res) => {
  const { name, country_name, email, bio } = req.body;

  const user = await addOneUser(name, country_name, email, bio);

  res.send(`Success! ${user.name} was added`);
});

// GET newest user
app.get("/get-newest-user", async (req, res) => {
  const user = await getNewestUser();
  res.json(user);
});

// POST saves country
app.post("/save-one-country", async (req, res) => {
  const { country_name } = req.body;

  const country = await saveOneCountry(country_name);

  res.send(`Saved ${country.country_name}`);
});

// GET all countries
app.get("/get-all-saved-countries", async (req, res) => {
  const countries = await getAllSavedCountries();
  res.json(countries);
});

// POST updates count
app.post("/update-one-country-count", async (req, res) => {
  const { country_name } = req.body;

  const count = await updateCountryCount(country_name);

  res.json(count);
});