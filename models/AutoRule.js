const mongoose = require("mongoose");

const autoRuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  valveId: { type: mongoose.Schema.Types.ObjectId, ref: "Valve" },
  condition: { type: String, required: true }, // e.g. "soil_moisture < 35"
  durationSeconds: { type: Number, default: 600 },
  enabled: { type: Boolean, default: true },
  lastTriggered: { type: Date }
});

module.exports = mongoose.model("AutoRule", autoRuleSchema);