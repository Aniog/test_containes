import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Generators from './pages/Generators.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<Generators />} />
        {/* Redirect root to /generators for preview convenience */}
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

