import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get reservation details from state (passed from Reservation.js)
    const reservationDetails = location.state || {};

    return (
        <div style={{ textAlign: 'center', padding: '20px' , color:'White',backgroundColor:'Black'}}>
            <h2>🎉 Reservation Confirmed!</h2>
            <p>Thank you, <strong>{reservationDetails.name}</strong>!</p>
            <p>Your table has been reserved for <strong>{reservationDetails.date}</strong> at <strong>{reservationDetails.time}</strong>.</p>
            <p>Guests: <strong>{reservationDetails.guests}</strong></p>
            <p>Confirmation sent to: <strong>{reservationDetails.email}</strong></p>

            {/* Additional Restaurant Details */}
            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <h3>Restaurant Details</h3>
                <p><strong>Location:</strong> Parandwandi, Somatne Phata</p>
                <p><strong>Phone No.:</strong> 9010203040</p>
                <p><strong>Email:</strong> Freshers@gmail.com</p>
            </div>

            {/* Back to Home Button */}
            <button
                onClick={() => navigate('/')}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Back to Home
            </button>
        </div>
    );
};

export default Confirmation;
