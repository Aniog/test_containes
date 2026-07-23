import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'
import { products } from './data/products'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import './App.css'

function AppShell() {
  const navigate = useNavigate()
  const [cartOpen, setCartOpen] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  const addToCart = React.useCallback((product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.product.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { product, quantity }]
    })
    setCartOpen(true)
  }, [])

  const increaseItem = React.useCallback((productId) => {
    setCartItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }, [])

  const decreaseItem = React.useCallback((productId) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeItem = React.useCallback((productId) => {
    setCartItems((current) => current.filter((item) => item.product.id !== productId))
  }, [])

  const openProduct = React.useCallback(
    (productId) => {
      navigate(`/products/${productId}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [navigate],
  )

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} onOpenProduct={openProduct} />} />
        <Route path="/shop" element={<Shop onAdd={addToCart} onOpenProduct={openProduct} />} />
        <Route path="/products/:productId" element={<ProductDetail onAdd={addToCart} onOpenProduct={openProduct} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export default function App() {
  return <AppShell products={products} />
}
