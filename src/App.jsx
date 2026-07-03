import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/cart/CartContext'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/Home'
import ProductPage from './pages/ProductDetail'
import ShopPage from './pages/Shop'
import AboutPage from './pages/About'
import JournalPage from './pages/Journal'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-ivory">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
