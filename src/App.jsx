import { useEffect, useMemo, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer?velmora=1'
import CartDrawer from '@/components/layout/CartDrawer'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import ProductPage from '@/pages/ProductPage'
import { CartProvider, useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

const ScrollManager = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.hash, location.pathname])

  return null
}

const AppShell = () => {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleAddToCart = useMemo(
    () => (product, variant, quantity) => addItem(product, variant, quantity),
    [addItem],
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-50 text-stone-900">
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
        <Route path="/product/:slug" element={<ProductPage onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
