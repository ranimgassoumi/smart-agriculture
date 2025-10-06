const Field = require("../models/fieldModels");

// ✅ Créer un champ
exports.createField = async (req, res) => {
  try {
    const { name, cropType, location } = req.body;
    if (!name || !cropType || !location)
      return res.status(400).json({ message: "Tous les champs sont requis" });

    const field = await Field.create({ name, cropType, location });
    res.status(201).json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Lire tous les champs
exports.getFields = async (req, res) => {
  try {
    const fields = await Field.find();
    res.json(fields);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Lire un champ par ID
exports.getFieldById = async (req, res) => {
  try {
    const field = await Field.findById(req.params.id);
    if (!field) return res.status(404).json({ message: "Champ introuvable" });
    res.json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Modifier un champ
exports.updateField = async (req, res) => {
  try {
    const field = await Field.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!field) return res.status(404).json({ message: "Champ introuvable" });
    res.json(field);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Supprimer un champ
exports.deleteField = async (req, res) => {
  try {
    const field = await Field.findByIdAndDelete(req.params.id);
    if (!field) return res.status(404).json({ message: "Champ introuvable" });
    res.json({ message: "Champ supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
