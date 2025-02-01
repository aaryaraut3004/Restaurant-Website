import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // Basic form validation
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
            setError('All fields are required!');
            return;
        }

        // Validate phone number (must be numbers only)
        if (!/^\d{10}$/.test(formData.phone)) {
            setError('Phone number must be 10 digits.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/reservation/reserve', formData);
            
            if (response.status === 201) {
                setMessage('🎉 Reservation successful! We will contact you soon.');
                setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '' }); // Clear form
                navigate('/confirmation', { state: formData });
            } else {
                setError('Failed to make a reservation. Please try again.');
            }
        } catch (error) {
            setError('Server error. Please try again later.');
            console.error('Reservation Error:', error);
        }
        setLoading(false);
    };

    return (
        <div>
            <h2>Table Reservation</h2>
            {message && <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>}
            {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required maxLength="10" />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} required min="1" max="20" />
                <button type="submit" disabled={loading}>{loading ? 'Processing...' : 'Reserve Table'}</button>
            </form>
        </div>
    );
};

export default Reservation;