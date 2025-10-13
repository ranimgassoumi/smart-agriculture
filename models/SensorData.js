const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  fieldId: {
    type: String,  // or ObjectId if linked to another collection
    required: true
  },
  type: {
    type: String,
    enum: ["temperature", "humidity", "soilMoisture", "light"],
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("SensorData", sensorSchema);