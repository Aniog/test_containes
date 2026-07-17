import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import ShopPage from './pages/ShopPage'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <CartDrawer />
      </Router>
    </CartProvider>
  )
}

export default App
