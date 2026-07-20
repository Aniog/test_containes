import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import RouteBridge from '@/components/layout/RouteBridge'
import HomePage from '@/pages/HomePage.jsx?velmora=local-bg-images'
import ProductPage from '@/pages/ProductPage.jsx?velmora=local-bg-images'
import ShopPage from '@/pages/ShopPage.jsx?velmora=local-bg-images'

function App() {
  const appRef = useRef(null)
  const [routeKey, setRouteKey] = useState(() => window.location.pathname + window.location.search)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const updateRouteKey = () => setRouteKey(window.location.pathname + window.location.search)
    window.addEventListener('velmora-route-change', updateRouteKey)
    window.addEventListener('popstate', updateRouteKey)

    return () => {
      window.removeEventListener('velmora-route-change', updateRouteKey)
      window.removeEventListener('popstate', updateRouteKey)
    }
  }, [])

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') {
        cleanupImages()
      }
    }
  }, [routeKey, cartOpen])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...currentItems, { ...product, quantity }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (productId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId)
      return
    }
    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }

  return (
    <BrowserRouter>
      <RouteBridge />
      <div ref={appRef} className="min-h-screen bg-velmora-ivory font-sans text-velmora-ink">
        <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
        </Routes>
        <Footer />
        <CartDrawer
          open={cartOpen}
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
