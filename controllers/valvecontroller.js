const Valve = require("../models/Valve");

exports.getValves = async (req, res) => {
  try {
    const valves = await Valve.find();
    res.json(valves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createValve = async (req, res) => {
  try {
    const newValve = new Valve(req.body);
    await newValve.save();
    res.status(201).json(newValve);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.commandValve = async (req, res) => {
  const { valveId, action, percentage } = req.body;
  try {
    const valve = await Valve.findById(valveId);
    if (!valve) return res.status(404).json({ message: "Valve not found" });

    if (action === "open") {
      valve.isOpen = true;
      valve.percentage = percentage || 100;
    } else if (action === "close") {
      valve.isOpen = false;
      valve.percentage = 0;
    }
    valve.lastUpdated = new Date();
    await valve.save();

    // TODO: send MQTT or serial command to hardware here
    res.json({ message: "Valve ${valve.name} ${action}ed", valve });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.commandAllValves = async (req, res) => {
  const { action } = req.body;
  try {
    const isOpen = action === "open";
    await Valve.updateMany({}, { isOpen, percentage: isOpen ? 100 : 0, lastUpdated: new Date() });
    res.json({ message: `All valves ${action}ed successfully`});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};