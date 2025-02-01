import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the actual API request
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });

      if (response.status === 200 && response.data.token) {
        // Store the token in localStorage on successful login
        localStorage.setItem('authToken', response.data.token);
        console.log('Login successful, navigating to menu...');
        navigate('/menu'); // Redirect to menu page
      } else {
        console.log('Unexpected response format:', response.data);
        setError('Unexpected response from server.');
      }
    } catch (err) {
      setError('Invalid credentials');
      console.error('Login error:', err.response ? err.response.data : err.message);
    }
  };

  return (

    <div className="login-page">
      <h1>Welcome To "Freshers Restaurant"</h1>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;