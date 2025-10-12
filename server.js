require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const valveRoutes = require("./routes/valveRoutes");
const autoRuleRoutes = require("./routes/autoRuleRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/valves", valveRoutes);
app.use("/autoRules", autoRuleRoutes);

app.get("/", (req, res) => {
  res.send("Smart Irrigation Backend API running 🌿");
});

// Connect to DB & Start Server
connectDB();
app.listen(PORT, () => console.log(`🌍 Server running on port ${PORT}`));
