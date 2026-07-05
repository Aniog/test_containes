import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider, useCart } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  )
}
