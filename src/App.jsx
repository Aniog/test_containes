import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GeneratorsHub from './pages/GeneratorsHub'

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
