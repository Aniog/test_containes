import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CartProvider, useCart } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import About from '@/pages/About'
import Journal from '@/pages/Journal'

function LayoutContent() {
  const { items } = useCart()
  const containerRef = useRef(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanupRef.current = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => {
      cancelAnimationFrame(frameId)
      if (typeof cleanupRef.current === 'function') {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
  }, [items.length])

  return (
    <div ref={containerRef} className="relative flex min-h-screen flex-col bg-velmora-ivory">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <LayoutContent />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
