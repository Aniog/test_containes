import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Default route for easier preview */}
        <Route path="/" element={<GeneratorsHub />} />
      </Routes>
    </Router>
  );
}

export default App;
