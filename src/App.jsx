import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/home/Navbar'
import CartDrawer from '@/components/ui/CartDrawer'
import Footer from '@/components/home/Footer'
import HomePage from '@/pages/Home'
import ShopPage from '@/pages/Shop'
import ProductDetailPage from '@/pages/ProductDetail'
import AboutPage from '@/pages/About'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-warm-white flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/collections" element={<ShopPage />} />
              <Route path="/journal" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
