import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneratorsHub from './GeneratorsHub';

// Main App with routing
// /generators renders the hub page
// All other routes can fall back or show the hub for this task
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Fallback: show the hub for root and any other path during this build */}
        <Route path="*" element={<GeneratorsHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
