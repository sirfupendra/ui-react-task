// src/components/MainContent.jsx
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/mIZWnlzPFGk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainContent;
