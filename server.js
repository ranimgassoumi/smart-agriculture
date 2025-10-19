<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
=======
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
>>>>>>> sabrin-part

dotenv.config();
connectDB();

const app = express();
<<<<<<< HEAD

app.use(cors());
app.use(express.json());

// Routes
app.use("/sensors", require("./routes/SensorRoutes"));


// Route test
app.get("/", (req, res) => {
  res.send("🌾 Smart Agriculture API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
=======
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware pour lire le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Route test
app.get("/", (req, res) => {
  res.send("Backend Smart Agriculture fonctionne !");
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
>>>>>>> chaima-dev
=======
app.use(express.json());

// Routes CRUD Fields
app.use("/fields", require("./routes/fieldRoutes"));

// Route test
app.get("/", (req, res) => res.send("API fonctionne !"));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));

>>>>>>> sabrin-part
=======
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const valveRoutes = require("./routes/valveRoutes");
const autoRuleRoutes = require("./routes/autoRuleRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/valves", valveRoutes);
app.use("/autoRules", autoRuleRoutes);

app.get("/", (req, res) => {
  res.send("Smart Irrigation Backend API running 🌿");
});

// Connect to DB & Start Server
connectDB();
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
>>>>>>> khawla-part
