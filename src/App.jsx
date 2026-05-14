import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GeneratorsHub from './pages/GeneratorsHub'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        {/* Redirect root to /generators for preview convenience */}
        <Route path="/" element={<Navigate to="/generators" replace />} />
        <Route path="*" element={<Navigate to="/generators" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
