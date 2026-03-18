import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import UserFormPage from './pages/UserFormPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/user-form" element={<UserFormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
