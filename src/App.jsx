import { useEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import strkImgConfig from './strk-img-config.json'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import { getCartItemId } from '@/lib/cart'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, search])

  return null
}

function Storefront() {
  const appRef = useRef(null)
  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const cartImageKey = useMemo(() => cartItems.map((item) => item.cartId).join('|'), [cartItems])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, appRef.current)
      window.setTimeout(() => ImageHelper.loadImages(strkImgConfig, appRef.current), 120)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.search, cartOpen, cartImageKey])

  const handleAddToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartId = getCartItemId(product.id, variant)
    setCartItems((current) => {
      const existing = current.find((item) => item.cartId === cartId)
      if (existing) {
        return current.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [
        ...current,
        {
          cartId,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setCartOpen(true)
  }

  const updateQuantity = (cartId, quantity) => {
    setCartItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.cartId !== cartId)
        : current.map((item) => (item.cartId === cartId ? { ...item, quantity } : item)),
    )
  }

  const removeItem = (cartId) => {
    setCartItems((current) => current.filter((item) => item.cartId !== cartId))
  }

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-pearl text-velmora-ink">
      <ScrollToTop />
      <Header cartItems={cartItems} onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer
        open={cartOpen}
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
