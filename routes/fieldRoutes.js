const express = require("express");
const router = express.Router();
const fieldController = require("../controllers/fieldController");

router.post("/", fieldController.createField);
router.get("/", fieldController.getFields);
router.get("/:id", fieldController.getFieldById);
router.put("/:id", fieldController.updateField);
router.delete("/:id", fieldController.deleteField);

module.exports = router;
