import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage.jsx?velmora-home-v2'
import ShopPage from '@/pages/ShopPage.jsx?velmora-shop-v2'
import ProductPage from '@/pages/ProductPage.jsx?velmora-gallery-v2'
import strkImgConfig from '@/strk-img-config.json'
import './App.css'

function Storefront() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash, isCartOpen, cartItems.length])

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
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
          imageId: product.imageId,
          description: product.description,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const increaseItem = (id, variant) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseItem = (id, variant) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onIncrease={increaseItem}
        onDecrease={decreaseItem}
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
