<<<<<<< HEAD

const mongoose = require("mongoose");
=======
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
>>>>>>> 14b19fd24864f42de5e774a100f25702e0b41343

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
<<<<<<< HEAD
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
=======
    console.log("✅ MongoDB connecté");
  } catch (err) {
    console.error("❌ Erreur MongoDB:", err.message);
>>>>>>> 14b19fd24864f42de5e774a100f25702e0b41343
    process.exit(1);
  }
};

module.exports = connectDB;
