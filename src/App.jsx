import { Routes, Route } from 'react-router-dom'
import GeneratorsHub from './pages/GeneratorsHub.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/generators" element={<GeneratorsHub />} />
      <Route path="/" element={<GeneratorsHub />} />
    </Routes>
  )
}

export default App
