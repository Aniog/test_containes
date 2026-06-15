import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Generators from './pages/Generators';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<Generators />} />
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
