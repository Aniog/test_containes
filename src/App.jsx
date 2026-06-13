import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Generators from '@/pages/Generators.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<Generators />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
