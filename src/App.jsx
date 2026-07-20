import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Toaster } from './components/ui/Toaster'
import CartDrawer from './components/ui/CartDrawer'

// Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Journal from './pages/Journal'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <CartDrawer />
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
