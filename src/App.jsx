import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import './App.css'

function AppRoutes() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: options.replace })
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold'
    const quantity = options.quantity || 1

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id && item.variant === variant)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === id && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        subtotal={subtotal}
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
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
