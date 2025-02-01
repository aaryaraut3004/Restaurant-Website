import axios from 'axios';

// Get token from local storage if available
const token = localStorage.getItem('token');

// Set up Axios instance with the token for protected routes
const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Ensure this matches your backend's base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? 'Bearer ${token}' : '',
  },
});

// Function to register user
export const registerUser = async (userData) => {
  return api.post('/user/register', userData);
};

// Function to login user
//export const loginUser = async (credentials) => {
 // return api.post('/user/login', credentials);
//};

// Function to create reservation
export const createReservation = async (reservationData) => {
  return api.post('/reservation', reservationData);  // Adjust the route as needed
};