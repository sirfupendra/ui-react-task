// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default App;
