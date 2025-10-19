const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post(
  '/register',
  [
    body('name', 'Le nom est requis').notEmpty(),
    body('email', 'Email invalide').isEmail(),
    body('password', 'Mot de passe min 6 caractères').isLength({ min: 6 }),
    body('role', 'Role requis').notEmpty()
  ],
  register
);

router.post(
  '/login',
  [
    body('email', 'Email invalide').isEmail(),
    body('password', 'Mot de passe requis').exists(),
  ],
  login
);

module.exports = router;
