const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/reserve', async (req, res) => {
    try {
        const { name, email, phone, date, time, guests } = req.body;
        const newReservation = new Reservation({ name, email, phone, date, time, guests });
        await newReservation.save();
        res.status(201).json({ message: 'Reservation saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving reservation', error });
    }
});

module.exports = router;