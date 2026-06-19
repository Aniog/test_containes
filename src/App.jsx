import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'
import Nav from './components/Nav'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F5F2ED]">
        <Nav onCartClick={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onCartOpen={() => setIsCartOpen(true)} />} />
          <Route path="/product/:id" element={<ProductDetail onCartOpen={() => setIsCartOpen(true)} />} />
          <Route path="/collections" element={<Shop onCartOpen={() => setIsCartOpen(true)} />} />
          <Route path="/about" element={<Home />} />
          <Route path="/journal" element={<Home />} />
        </Routes>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  )
}

export default App
