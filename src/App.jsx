import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import GeneratorsHub from '@/pages/GeneratorsHub.jsx'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/generators" element={<GeneratorsHub />} />
          <Route path="/" element={<GeneratorsHub />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
