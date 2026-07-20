import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0 })
    return undefined
  }, [location.pathname, location.hash])

  return null
}

function AppShell() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((product, quantity = 1, tone = 'Gold') => {
    setCartItems((current) => {
      const keyMatch = (item) => item.id === product.id && item.tone === tone
      const existing = current.find(keyMatch)

      if (existing) {
        return current.map((item) =>
          keyMatch(item) ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          ...product,
          tone,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }, [])

  const changeQuantity = useCallback((id, tone, quantity) => {
    setCartItems((current) => {
      if (quantity <= 0) {
        return current.filter((item) => !(item.id === id && item.tone === tone))
      }
      return current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      )
    })
  }, [])

  const removeItem = useCallback((id, tone) => {
    setCartItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <ScrollToTop />
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
        <Route path="/products/:slug" element={<ProductDetail onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onQuantityChange={changeQuantity}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
