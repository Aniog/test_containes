import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import GeneratorsHub from './pages/GeneratorsHub'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="/" element={<GeneratorsHub />} />
        <Route path="*" element={<GeneratorsHub />} />
      </Routes>
    </Router>
  )
}

export default App
