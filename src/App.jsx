import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'
import About from '@/pages/About'
import ShopTest from '@/pages/ShopTest'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop-test" element={<ShopTest />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
