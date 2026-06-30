import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Collections from './pages/Collections'
import About from './pages/About'
import Journal from './pages/Journal'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-cream-50 text-brand-900">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
