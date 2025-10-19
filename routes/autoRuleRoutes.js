const express = require("express");
const router = express.Router();
const {
  getRules,
  createRule,
  setEnabled
} = require("../controllers/autoRulecontroller");

router.get("/", getRules);
router.post("/", createRule);
router.post("/:id/setEnabled", setEnabled);

module.exports = router;