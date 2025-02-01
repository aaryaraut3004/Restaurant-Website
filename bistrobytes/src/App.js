import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Confirmation from './components/Confirmation';
import AboutUs from './components/AboutUs';  // About Us component
//import ContactUs from './components/ContactUs';  // Contact Us component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is displayed always */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default to login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/about" element={<AboutUs />} /> {/* About Us route */}
        
      </Routes>
    </Router>
  );
};

export default App;