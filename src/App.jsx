import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import { sanitizedStrkImgConfig } from '@/lib/strkImages'
import './App.css'

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const appRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(sanitizedStrkImgConfig, appRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [location.pathname, location.search, location.hash, cartOpen, cartItems.length])

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

  const addToCart = useCallback((product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id && item.tone === tone)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
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
          category: product.category,
          tone,
          quantity,
        },
      ]
    })

    setCartOpen(true)
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    setCartItems((currentItems) => {
      if (quantity <= 0) {
        return currentItems.filter((item) => !(item.id === productId && item.tone === tone))
      }

      return currentItems.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity } : item,
      )
    })
  }, [])

  const removeItem = useCallback((productId, tone) => {
    setCartItems((currentItems) => currentItems.filter((item) => !(item.id === productId && item.tone === tone)))
  }, [])

  const pageProps = useMemo(() => ({ onAddToCart: addToCart }), [addToCart])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header cartItems={cartItems} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage {...pageProps} />} />
        <Route path="/shop" element={<ShopPage {...pageProps} />} />
        <Route path="/product/:productId" element={<ProductPage {...pageProps} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Storefront />
    </BrowserRouter>
  )
}

export default App
