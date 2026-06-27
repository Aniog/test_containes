import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Generators from './pages/Generators';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<Generators />} />
        {/* Redirect root to /generators for this project */}
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
