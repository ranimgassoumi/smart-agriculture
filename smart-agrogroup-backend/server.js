// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Exemple de route protégée
const authMiddleware = require('./middlewares/authMiddleware');
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'Accès autorisé', userId: req.user.id });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
