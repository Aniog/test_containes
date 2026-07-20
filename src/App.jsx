import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '@/components/common/Header.jsx'
import CartDrawer from '@/components/common/CartDrawer.jsx'
import Footer from '@/components/common/Footer.jsx'
import ScrollToTop from '@/components/common/ScrollToTop.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import { addProductToCart, updateCartItemQuantity } from '@/lib/cart.js'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    setCartItems((items) => addProductToCart(items, product, variant, quantity))
    setIsCartOpen(true)
  }

  const handleUpdateQuantity = (key, quantity) => {
    setCartItems((items) => updateCartItemQuantity(items, key, quantity))
  }

  const handleRemove = (key) => {
    setCartItems((items) => items.filter((item) => item.key !== key))
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-velmora-parchment text-velmora-espresso">
        <Header cartItems={cartItems} onCartOpen={() => setIsCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/products/:slug" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemove}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
