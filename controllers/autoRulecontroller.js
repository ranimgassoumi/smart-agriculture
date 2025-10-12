const AutoRule = require("../models/AutoRule");

exports.getRules = async (req, res) => {
  try {
    const rules = await AutoRule.find().populate("valveId");
    res.json(rules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRule = async (req, res) => {
  try {
    const rule = new AutoRule(req.body);
    await rule.save();
    res.status(201).json(rule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.setEnabled = async (req, res) => {
  try {
    const { enabled } = req.body;
    const rule = await AutoRule.findByIdAndUpdate(req.params.id, { enabled }, { new: true });
    res.json(rule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};