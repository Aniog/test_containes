import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from '@/components/CartDrawer'
import NavBar from '@/components/NavBar'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options.replace) {
        window.history.replaceState({}, '', path)
      } else {
        window.history.pushState({}, '', path)
      }
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }))
    }
  }, [])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  return null
}

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCart = useCallback((product, variant = product.tone[0], quantity = 1) => {
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
          ...product,
          variant,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }, [])

  const handleRemove = useCallback((productId, variant) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.variant === variant)))
  }, [])

  const handleUpdateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      handleRemove(productId, variant)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }, [handleRemove])

  return (
    <>
      <ScrollManager />
      <NavBar cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
      </Routes>
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemove}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}
