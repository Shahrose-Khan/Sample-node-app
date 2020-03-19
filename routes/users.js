const express = require('express');
const router = express.Router();
// Load User Controller
const userController = require('../controllers/user.controller')
const { forwardAuthenticated } = require('../config/auth');

//Register Routes
// Login Page
router.get('/login', forwardAuthenticated, userController.login);
// Register Page
router.get('/register', forwardAuthenticated, userController.register);

// Register
router.post('/register', userController.registerUser);

// Login
router.post('/login', userController.loginUser);

// Logout
router.get('/logout', userController.logout);

module.exports = router;
