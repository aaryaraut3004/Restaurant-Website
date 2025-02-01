const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    guests: Number,
});

module.exports = mongoose.model('Reservation', ReservationSchema);