// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Bienvenue sur notre site pour le Hackaton</h1>
        <div className="button-container">
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/user">
            <button className="btn">Users</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
