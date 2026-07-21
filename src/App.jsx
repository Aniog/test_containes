import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Shop from '@/pages/Shop'
import About from '@/pages/About'
import Cart from '@/pages/Cart'
import { Sonner } from '@/components/ui/sonner'
import { useState } from 'react'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <Sonner />
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
