const express = require("express");
const app = express();
require("dotenv").config(); // Importing dotenv to load environment variables

// Import the routes
const userRoutes = require("./routes/userRoutes");

// Define port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the database
require("./config/database").dbconnect();

// Route setup
app.use("/user", userRoutes);

// Activate server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT); // Log server activation
});
