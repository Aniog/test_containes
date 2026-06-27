import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

