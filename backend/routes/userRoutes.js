const express = require('express');
const { registerUser, loginUser, getUsers, getUserByEmail, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

// Register and Login
router.post('/register', registerUser);
router.post('/login', loginUser);

// CRUD Operations
router.get('/users', getUsers); // Get all users
router.get('/users/:email', getUserByEmail); // Get a single user by email
router.put('/users/:email', updateUser); // Update user by email
router.delete('/users/:email', deleteUser); // Delete user by email

module.exports = router;
