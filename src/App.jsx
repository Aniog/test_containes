import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

function Layout({ children, onCartOpen }) {
  return (
    <div className="min-h-screen bg-ivory text-[#1a1a1a]">
      <Navbar onCartOpen={onCartOpen} />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout onCartOpen={() => setCartOpen(true)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
