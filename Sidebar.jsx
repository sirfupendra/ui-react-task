// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Contents</h2>
      <ul>
        <li>Introduction</li>
        <li>Introduction to Microservices</li>
        <li>Hands on Creating Microservices with ASP.Net Core</li>
        <li>Hands on: Synchronous Communication between Microservices</li>
        <li>Microservices and DevOps</li>
        <li>Microservices Containerization with Docker</li>
        <li>Microservices Deployment</li>
        <li>Conclusion</li>
      </ul>
    </div>
  );
};

export default Sidebar;
