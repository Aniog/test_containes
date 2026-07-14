import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Product from '@/pages/Product'
import Shop from '@/pages/Shop'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import { useState } from 'react'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  )
}

export default App
