// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="instructor">
        <img src="instructor-image-url" alt="Instructor" />
        <div>
          <h3>Rodrigo Diaz</h3>
          <p>Solution Architect, Lorem, Ipsum, engineer Analyst, Programmer, worker</p>
        </div>
      </div>
      <div className="related-to-course">
        <a href="#">Classroom</a>
        <a href="#">Class Files</a>
        <a href="#">Certificates</a>
      </div>
    </div>
  );
};

export default Footer;
