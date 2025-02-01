const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');  // Correct import
const app = express();
const reservationRoutes = require('./routes/reservation');

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS for all routes (you can customize this for specific routes as well)
app.use(cors({
    origin: 'http://localhost:3000',
}));

// Use the user routes for requests to /api/user
app.use('/api/user', userRoutes);  // Make sure this is correct
app.use('/api/reservation', reservationRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bistrobytes')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));