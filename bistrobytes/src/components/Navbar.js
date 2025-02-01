import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming styles are in App.css

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the hamburger menu

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Get the token from localStorage
    setIsLoggedIn(!!token); // Set login status based on whether the token exists
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the hamburger menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-brand">Freshers</h1>
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        {isLoggedIn ? (
          <>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
