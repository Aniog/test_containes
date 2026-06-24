import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </Router>
  )
}

export default App
