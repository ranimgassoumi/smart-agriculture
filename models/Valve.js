const mongoose = require("mongoose");

const valveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isOpen: { type: Boolean, default: false },
  supportsPercentage: { type: Boolean, default: false },
  percentage: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Valve", valveSchema);