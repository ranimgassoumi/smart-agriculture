const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
<<<<<<< HEAD
const cors = require("cors");
=======
>>>>>>> 14b19fd24864f42de5e774a100f25702e0b41343

dotenv.config();
connectDB();

const app = express();
<<<<<<< HEAD
app.use(cors());
app.use(express.json());

// Routes
app.use("/sensors", require("./routes/sensorRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("🌾 Smart Agriculture API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
=======
app.use(express.json());

// Routes CRUD Fields
app.use("/fields", require("./routes/fieldRoutes"));

// Route test
app.get("/", (req, res) => res.send("API fonctionne !"));

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur le port ${PORT}`));

>>>>>>> 14b19fd24864f42de5e774a100f25702e0b41343
