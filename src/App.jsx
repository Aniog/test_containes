import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import HomePage from '@/pages/HomePage'
import CollectionPage from '@/pages/CollectionPage'
import ProductDetailPage from '@/pages/ProductDetailPage'
import AboutPage from '@/pages/AboutPage'
import JournalPage from '@/pages/JournalPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleCartOpen = useCallback(() => setCartOpen(true), [])
  const handleSearchOpen = useCallback(() => setSearchOpen(true), [])

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartOpen={handleCartOpen} onSearchOpen={handleSearchOpen} />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<CollectionPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#faf8f5',
              border: '1px solid #d4c5b3',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px',
            },
          }}
        />
      </CartProvider>
    </Router>
  )
}

export default App
