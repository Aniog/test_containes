import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import HomePage from '@/pages/Home'
import ShopPage from '@/components/shop/ShopPage'
import ProductDetail from '@/components/product/ProductDetail'
import AboutPage from '@/pages/About'
import JournalPage from '@/pages/Journal'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream">
          <Navigation />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
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
