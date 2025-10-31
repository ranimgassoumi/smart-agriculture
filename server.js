const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authMiddleware = require('./middlewares/authMiddleware');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB().then(() => console.log("MongoDB connected")).catch(err => console.error(err));

// Routes
app.use("/api/sensors", require("./routes/SensorRoutes"));
app.use("/api/fields", require("./routes/fieldRoutes"));
app.use("/api/valves", require("./routes/valveRoutes"));
app.use("/api/autoRules", require("./routes/autoRuleRoutes"));
app.use("/api/auth", require('./routes/auth'));

// Protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'Accès autorisé', userId: req.user.id });
});

// Test route
app.get("/", (req, res) => {
  res.send("🌾 Smart Agriculture API is running...");
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
