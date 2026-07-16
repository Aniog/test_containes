import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Toaster } from './components/ui/sonner'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CartDrawer from './components/cart/CartDrawer'

import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Journal from './pages/Journal'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-[#FAF7F2] text-[#1A1816]">
          <Navigation />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:id" element={<Journal />} />
              {/* Fallback to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <CartDrawer />
          <Toaster position="top-center" closeButton />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
