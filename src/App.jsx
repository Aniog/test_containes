import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/storefront/CartDrawer.jsx'
import Footer from '@/components/storefront/Footer.jsx'
import Header from '@/components/storefront/Header.jsx'
import { products } from '@/data/products.js'
import Home from '@/pages/Home.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import Shop from '@/pages/Shop.jsx'
import './App.css'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}

function StorefrontApp() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => !(item.id === productId && item.variant === variant)),
    )
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-velmora-cream font-sans text-velmora-ink">
      <ScrollManager />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
        <Route path="*" element={<Shop onAddToCart={addToCart} products={products} />} />
      </Routes>
      <Footer />
      <CartDrawer
        cartItems={cartItems}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <StorefrontApp />
    </BrowserRouter>
  )
}

export default App
