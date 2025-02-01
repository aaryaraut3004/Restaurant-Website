import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <p>Indulge in a variety of authentic Indian dishes, crafted with fresh ingredients and traditional flavors.</p>

      {/* Starters */}
      <div className="menu-category">
        <h2>Starters</h2>
        <ul>
          <li>Papdi Chaat - ₹60</li>
          <li>Paneer Tikka - ₹150</li>
          <li>Veg Manchurian - ₹160</li>
          <li>Chicken Malai Tikka - ₹220</li>
          <li>Samosa (2 pcs) - ₹80</li>
        </ul>
      </div>

      {/* Main Course */}
      <div className="menu-category">
        <h2>Main Course</h2>
        <ul>
          <li>Butter Chicken - ₹300</li>
          <li>Paneer Butter Masala - ₹250</li>
          <li>Dal Makhani - ₹200</li>
          <li>Chicken Biryani - ₹380</li>
          <li>Veg Biryani - ₹320</li>
          <li>Rogan Josh (Mutton Curry) - ₹450</li>
        </ul>
      </div>

      {/* Indian Breads */}
      <div className="menu-category">
        <h2>Indian Breads</h2>
        <ul>
          <li>Butter Naan - ₹45</li>
          <li>Garlic Naan - ₹60</li>
          <li>Plain Paratha - ₹80</li>
          <li>Aloo Paratha - ₹120</li>
        </ul>
      </div>

      {/* Desserts */}
      <div className="menu-category">
        <h2>Desserts</h2>
        <ul>
          <li>Gulab Jamun (2 pcs) - ₹60</li>
          <li>Rasmalai (2 pcs) - ₹120</li>
          <li>Kulfi (Mango/Pista) - ₹50</li>
        </ul>
      </div>

      {/* Beverages */}
      <div className="menu-category">
        <h2>Beverages</h2>
        <ul>
          <li>Masala Chai - ₹40</li>
          <li>Sweet Lassi - ₹50</li>
          <li>Buttermilk - ₹30</li>
          <li>Mango Shake - ₹60</li>
        </ul>
      </div>

      {/* Call-to-Action Button */}
      <div className="cta">
        <p>Feeling hungry? Reserve a table now for the perfect dining experience!</p>
        <button className="hover-btn" onClick={() => navigate('/reservation')}>Reserve a Table</button>
      </div>
    </div>
  );
};

export default Menu;
