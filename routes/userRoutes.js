const express = require("express");
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controllers/UserController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// All routes are protected
router.use(protect);

router.route("/profile")
    .get(getUserProfile)
    .put(updateUserProfile)
    .delete(deleteUserProfile);

module.exports = router;
