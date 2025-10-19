const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
<<<<<<< HEAD
      useUnifiedTopology: true,
=======
      useUnifiedTopology: true
>>>>>>> sabrin-part
    });
    console.log("✅ MongoDB connecté");
  } catch (err) {
    console.error("❌ Erreur MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
