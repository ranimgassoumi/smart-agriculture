const Field = require("../models/fieldModels");

exports.createField = async (req, res) => {
  try {
    const { name, cropType, location } = req.body;
    if (!name || !cropType || !location)
      return res.status(400).json({ message: "All fields are required" });

    const field = await Field.create({ name, cropType, location });
    res.status(201).json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFields = async (req, res) => {
  try {
    const fields = await Field.find();
    res.json(fields);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFieldById = async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    if (!field) return res.status(404).json({ message: "Field not found" });
    res.json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateField = async (req, res) => {
  try {
    const field = await Field.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!field) return res.status(404).json({ message: "Field not found" });
    res.json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteField = async (req, res) => {
  try {
    const field = await Field.findByIdAndDelete(req.params.id);
    if (!field) return res.status(404).json({ message: "Field not found" });
    res.json({ message: "Field deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
