import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from '@/components/layout/Navbar.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import { addItemToCart, updateCartQuantity } from '@/lib/cart.js'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  const handleAddToCart = (product, variant = 'Gold', quantity = 1) => {
    setCartItems((items) => addItemToCart(items, product, variant, quantity))
    setCartOpen(true)
  }

  const handleQuantityChange = (itemId, quantity) => {
    setCartItems((items) => updateCartQuantity(items, itemId, quantity))
  }

  const handleRemove = (itemId) => {
    setCartItems((items) => items.filter((item) => item.itemId !== itemId))
  }

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <ScrollToTop />
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
