import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import StickyNav from '@/components/layout/StickyNav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-cream text-warm-black font-sans">
          <StickyNav />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
