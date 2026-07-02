import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'

function Layout({ children, onCartOpen }) {
  return (
    <>
      <Navbar onCartOpen={onCartOpen} />
      {children}
      <Footer />
    </>
  )
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-cream text-charcoal font-sans">
          <Layout onCartOpen={() => setCartOpen(true)}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center pt-20">
                    <div className="text-center">
                      <h1 className="font-serif text-4xl text-charcoal">Page Not Found</h1>
                      <p className="text-secondary text-sm mt-2">This page doesn't exist yet.</p>
                      <a href="/" className="btn-primary inline-block mt-8">Back Home</a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Layout>
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
