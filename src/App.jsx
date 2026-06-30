import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import strkImgConfig from './strk-img-config.json'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/layout/CartDrawer.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  if (hash.startsWith('/product/')) {
    return { page: 'product', productId: hash.replace('/product/', '') }
  }
  if (hash.startsWith('/shop')) return { page: 'shop' }
  return { page: 'home' }
}

function App() {
  const appRef = useRef(null)
  const [route, setRoute] = useState(getRoute)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = getRoute()
      setRoute(nextRoute)
      const hash = window.location.hash.replace(/^#/, '')
      if (nextRoute.page === 'home' && hash && hash !== '/') {
        window.requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        })
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [route, cartOpen, cartItems.length])

  useEffect(() => {
    setCartOpen(false)
  }, [route])

  const cartCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

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

  const incrementItem = (productId, variant) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decrementItem = (productId, variant) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (productId, variant) => {
    setCartItems((current) => current.filter((item) => item.id !== productId || item.variant !== variant))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-porcelain font-sans text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} transparent={route.page === 'home'} />
      {route.page === 'shop' && <ShopPage onAddToCart={addToCart} />}
      {route.page === 'product' && <ProductDetailPage productId={route.productId} onAddToCart={addToCart} />}
      {route.page === 'home' && <HomePage onAddToCart={addToCart} />}
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
    </div>
  )
}

export default App
