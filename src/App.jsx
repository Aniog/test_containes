import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CartProvider } from '@/context/CartContext.jsx'
import Navbar from '@/components/Navbar.jsx'
import CartDrawer from '@/components/CartDrawer.jsx'
import Footer from '@/components/Footer.jsx'
import Home from '@/pages/Home.jsx'
import Shop from '@/pages/Shop.jsx'
import ProductDetail from '@/pages/ProductDetail.jsx'
import About from '@/pages/About.jsx'
import Journal from '@/pages/Journal.jsx'

function ImageLoader() {
  const mainRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, mainRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <main ref={mainRef}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
      </Routes>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-velmora-cream">
          <Navbar />
          <CartDrawer />
          <ImageLoader />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
