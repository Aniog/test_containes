import { useCallback, useMemo, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'
import { products } from '@/data/products.js'
import HomePage from '@/pages/HomePage.jsx'
import ProductPage from '@/pages/ProductPage.jsx'
import ShopPage from '@/pages/ShopPage.jsx'
import './App.css'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.querySelector(location.hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.pathname, location.hash])

  return null
}

function Storefront() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
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
  }, [])

  const incrementItem = useCallback((id, variant) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }, [])

  const decrementItem = useCallback((id, variant) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const removeItem = useCallback((id, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <div className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
      <ScrollToHash />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route
          path="/product/:productId"
          element={<ProductPage products={products} onAddToCart={addToCart} />}
        />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
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
