const express = require('express');
const router = express.Router();
const { registerUser, loginUser, changePassword } = require('../controllers/auth-controller'); // Update name here
const authMiddleware = require('../middleware/auth-middleware')

router.post('/register', registerUser);
router.post('/login', loginUser);
// Use the new name
router.post('/change-password', authMiddleware, changePassword);

module.exports = router;