import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Default route also shows generators hub for this task */}
        <Route path="/" element={<GeneratorsHub />} />
        {/* Catch-all for any other path - show generators hub */}
        <Route path="*" element={<GeneratorsHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
