const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');  // User model should be in your backend/models folder

const jwt = require('jsonwebtoken');
const router = express.Router();  // Using router for defining routes
router.use(express.json());

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists by email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        

        // Create a new user
        const newUser = new User({ name, email, password});
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
});
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        console.log('Email Found', email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if the password matches
        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            'your_jwt_secret', // Replace with a secret string
            { expiresIn: '1h' }
        );

        // Send the token in the response
        res.status(200).json({ token, message: 'Login successful' });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;