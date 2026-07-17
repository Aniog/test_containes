import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleCartClick = useCallback(() => {
    setCartOpen(true)
  }, [])

  const handleSearchClick = useCallback(() => {
    setSearchOpen(prev => !prev)
  }, [])

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartClick={handleCartClick} onSearchClick={handleSearchClick} />
          <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
        <Toaster position="top-right" richColors />
      </CartProvider>
    </Router>
  )
}

export default App
