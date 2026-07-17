import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import Toaster from '@/components/ui/sonner'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import CollectionsPage from '@/pages/CollectionsPage'
import AboutPage from '@/pages/AboutPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
