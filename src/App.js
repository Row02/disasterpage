import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import Preparedness from './pages/Preparedness'
import Resources from './pages/Resources'
import Report from './pages/Report';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/preparedness" element={<Preparedness />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;