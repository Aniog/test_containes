import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import StorePage from './pages/StorePage'
import UserPage from './pages/UserPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
