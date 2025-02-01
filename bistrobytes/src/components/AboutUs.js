import React from 'react';
import '../App.css'; // Assuming the styles are in App.css

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">Welcome to Freshers</h1>
      <p className="about-us-intro">
        At Freshers, we believe in creating memorable dining experiences by combining 
        exceptional flavors, warm hospitality, and a cozy ambiance. Located in the heart of 
        the city, we’re proud to serve dishes that are as fresh as they are delicious.
      </p>

      <div className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to deliver freshly made, high-quality dishes using the 
          finest ingredients. We aim to create a space where friends, families, and food 
          enthusiasts can come together to enjoy extraordinary meals.
        </p>
      </div>

      <div className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Freshers was founded in 2022 with a vision to celebrate the love of good food. 
          What started as a small family-run restaurant has grown into a beloved culinary 
          destination.From traditional recipes to innovative creations, our menu reflects 
          the passion and creativity of our chefs.
        </p>
      </div>

      <div className="about-us-section">
        <h2>What Makes Us Special</h2>
        <ul>
          <li>🍴 Fresh, locally-sourced ingredients</li>
          <li>🌟 A menu crafted to suit every palate</li>
          <li>🛋️ A warm, welcoming environment</li>
          <li>👨‍🍳 Experienced chefs who bring passion to every plate</li>
        </ul>
      </div>

      <div className="about-us-section">
        <h2>Visit Us Today</h2>
        <p>
          Whether you're celebrating a special occasion or simply looking for a fantastic 
          meal, Freshers is the perfect destination. Come join us and let us take you on a 
          culinary journey you'll never forget.
        </p>
        <p><strong>Address:</strong> Parandwandi, Somatne Phata</p>
        <p><strong>Hours:</strong> Monday-Sunday, 10 AM - 10 PM</p>
      </div>
    </div>
  );
};

export default AboutUs;
