const express = require("express");
const router = express.Router();
const {
  getValves,
  createValve,
  commandValve,
  commandAllValves
} = require("../controllers/valvecontroller");

router.get("/", getValves);
router.post("/", createValve);
router.post("/command/valve", commandValve);
router.post("/command/valve/all", commandAllValves);

module.exports = router;