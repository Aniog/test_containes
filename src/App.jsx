import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)
  const { addItem } = useCart()

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAddToCart={addItem} />} />
          <Route path="/shop" element={<Shop onAddToCart={addItem} />} />
          <Route path="/product/:id" element={<Product onAddToCart={addItem} />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
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
