import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { products } from '@/data/products'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'
import './App.css'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const productMap = useMemo(() => new Map(products.map((product) => [product.id, product])), [])

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, quantity, variant }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.variant !== variant))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }
    setCartItems((current) =>
      current.map((item) => (item.id === productId && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  const hydratedCartItems = cartItems.map((item) => ({ ...productMap.get(item.id), ...item }))

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-porcelain font-sans text-velmora-ink">
        <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:productId" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={hydratedCartItems}
          subtotal={subtotal}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
