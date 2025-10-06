const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cropType: { type: String, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model("Field", fieldSchema);
