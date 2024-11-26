const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();  // Load environment variables from .env

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const urlRoutes = require("./routes/urlRoutes");
app.use("/api", urlRoutes);

const PORT = process.env.PORT || 5000;

// Ensure that process.env.MONGO_URI is correctly loaded
console.log("MongoDB URI:", process.env.MONGO_URI);  // This should log the URI to check if it's loaded correctly

// MongoDB connection using the environment variable
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
