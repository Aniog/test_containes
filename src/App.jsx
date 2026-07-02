import { useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import ImageResolver from '@/components/ImageResolver'
import Home from '@/pages/Home'
import Collection from '@/pages/Collection'
import ProductDetail from '@/pages/ProductDetail'

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, appRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <CartProvider>
      <BrowserRouter>
        <div ref={appRef} className="min-h-screen bg-soft-white">
          <ImageResolver />
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Collection />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/about" element={<Home />} />
              <Route path="/journal" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
