import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsPage from './pages/generators/GeneratorsPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsPage />} />
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

