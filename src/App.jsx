import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import CartDrawer from './components/cart/CartDrawer'
import SiteFooter from './components/site/SiteFooter'
import SiteHeader from './components/site/SiteHeader'
import { getProductById } from './data/products'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ShopPage from './pages/ShopPage'
import strkImgConfig from './strk-img-config.json'

const AppShell = () => {
  const containerRef = useRef(null)
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [cartItems, cartOpen, location.pathname, location.search, location.hash])

  useEffect(() => {
    setCartOpen(false)

    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  const handleAddToCart = (productOrId, options = {}) => {
    const product =
      typeof productOrId === 'string' ? getProductById(productOrId) : productOrId

    if (!product) {
      return
    }

    const quantity = Math.max(1, options.quantity ?? 1)
    const variant = options.variant ?? product.metalOptions?.[0] ?? 'Gold Tone'
    const cartKey = `${product.id}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.key === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          key: cartKey,
          id: product.id,
          name: product.displayName,
          price: product.price,
          quantity,
          variant,
        },
      ]
    })
    setCartOpen(true)
  }

  const handleRemoveFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const handleUpdateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(key)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[var(--color-surface)] text-[var(--color-foreground)]">
      <SiteHeader cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/product/:productId" element={<ProductPage onAddToCart={handleAddToCart} />} />
        </Routes>
      </main>
      <SiteFooter />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
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
