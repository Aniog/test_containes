import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneratorsHub from './pages/GeneratorsHub'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generators" element={<GeneratorsHub />} />
        <Route path="/" element={<GeneratorsHub />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
