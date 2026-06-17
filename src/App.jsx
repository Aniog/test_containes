import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HubPage from './pages/HubPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<HubPage />} />
        <Route path="/" element={<HubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
