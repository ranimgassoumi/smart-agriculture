const express = require("express");
const router = express.Router();
const { addSensorData, getSensorData, getWeatherData } = require("../controllers/sensorController");

// Routes
router.post("/", addSensorData);
router.get("/", getSensorData);

// 🌦️ Weather route (with latitude & longitude)
router.get("/weather/:lat/:lon", getWeatherData);

module.exports = router;
