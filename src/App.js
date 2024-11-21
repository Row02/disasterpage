import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Preparedness from './pages/Preparedness'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/preparedness" element={<Preparedness />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;