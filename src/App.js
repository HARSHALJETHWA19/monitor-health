// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MonitorList from './components/MonitorList';
import AlertList from './components/AlertList';
import Report from './components/Report';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/monitors" element={<MonitorList />} />
        <Route path="/alerts" element={<AlertList />} />
        <Route path="/reports" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
