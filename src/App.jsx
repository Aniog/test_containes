import { useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { products } from '@/data/products'
import Home from '@/pages/Home'
import ProductDetail from '@/pages/ProductDetail'
import Shop from '@/pages/Shop'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems])

  const addToCart = (product, options = {}) => {
    const variant = options.variant || product.variants?.[0] || 'Gold'
    const quantity = options.quantity || 1
    const key = `${product.id}-${variant}`

    setCartItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { key, product, variant, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const changeQuantity = (key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }
    setCartItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-espresso">
        <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onAdd={addToCart} />} />
          <Route path="/shop" element={<Shop onAdd={addToCart} />} />
          <Route path="/product/:productId" element={<ProductDetail onAdd={addToCart} />} />
          <Route path="*" element={<ProductDetail product={products[0]} onAdd={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          isOpen={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantityChange={changeQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
