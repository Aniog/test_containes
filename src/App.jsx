import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Redirect root to /generators for development convenience */}
        <Route path="/" element={<Navigate to="/generators" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
