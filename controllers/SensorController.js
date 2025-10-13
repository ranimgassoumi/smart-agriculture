const SensorData = require("../models/SensorData");
const axios = require("axios");

// Threshold values for alerts
const THRESHOLDS = {
  temperature: 30,    // °C
  humidity: 70,       // %
  soilMoisture: 20,   // example value
  light: 800          // example value
};

// Simple notification function (logs for now)
function sendNotification(fieldId, type, value) {
  console.log(`⚠️ ALERT: Field ${fieldId} - ${type} exceeded threshold! Value: ${value}`);
  // Later you can integrate push/email/SMS here
}



// Add new sensor data
exports.addSensorData = async (req, res) => {
  try {
    const { fieldId, type, value } = req.body;

    if (!fieldId || !type || value === undefined) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newSensorData = new SensorData({ fieldId, type, value });
    await newSensorData.save();


    if (THRESHOLDS[type] !== undefined && value > THRESHOLDS[type]) {
  sendNotification(fieldId, type, value);
}

    res.status(201).json({
      message: "Sensor data added successfully",
      data: newSensorData
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }

  
};

// Get all sensor data (with optional filters)
exports.getSensorData = async (req, res) => {
  try {
    const { fieldId, type } = req.query;
    const filter = {};
    if (fieldId) filter.fieldId = fieldId;
    if (type) filter.type = type;

    const data = await SensorData.find(filter).sort({ timestamp: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 🌦️ Get combined local sensor + OpenWeather data
exports.getWeatherData = async (req, res) => {
  try {
    const { lat, lon } = req.params;

    if (!lat || !lon) {
      return res.status(400).json({ message: "Latitude and Longitude are required" });
    }

    // 1. Fetch recent sensor data (last 1 hour)
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const localSensors = await SensorData.find({ timestamp: { $gte: oneHourAgo } })
      .sort({ timestamp: -1 })
      .limit(5);

    // 2. Fetch weather data from OpenWeather
    const weatherResponse = await axios.get(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
);

    const weatherData = {
      temperature: weatherResponse.data.main.temp,
      humidity: weatherResponse.data.main.humidity,
      description: weatherResponse.data.weather[0].description,
      city: weatherResponse.data.name
    };

    // 3. Combine both
    res.json({
      localSensors,
      weatherData
    });
  } catch (error) {
    console.error("Weather API Error:", error.message);
    res.status(500).json({ message: "Failed to fetch weather data", error: error.message });
  }
};