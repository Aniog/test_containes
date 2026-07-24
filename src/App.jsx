import './App.css'
import { useEffect, useMemo, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PreviewRouteBridge from '@/components/layout/PreviewRouteBridge'
import { CartProvider, useCart } from '@/context/CartContext'
import { products } from '@/data/store'
import AboutPage from '@/pages/AboutPage'
import CollectionsPage from '@/pages/CollectionsPage'
import HomePage from '@/pages/HomePage'
import JournalPage from '@/pages/JournalPage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import strkImgConfig from '@/strk-img-config.json'

const AppShell = () => {
  const { pathname } = useLocation()
  const containerRef = useRef(null)
  const { addToCart } = useCart()

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [pathname])

  const handleAddToCart = (product, tone = 'Gold Tone', quantity = 1) => {
    addToCart(product, tone, quantity)
  }

  const productNames = useMemo(
    () => products.map((product) => product.name).join(' · '),
    [],
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-canvas text-brand-text">
      <PreviewRouteBridge />
      <Header />
      <div id="velmora-product-catalog" className="sr-only">
        {productNames}
      </div>
      <div className={pathname === '/' ? '' : 'pt-24'}>
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route
            path="/products/:slug"
            element={<ProductPage onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </div>
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
