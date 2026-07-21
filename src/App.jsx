import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'
import Collections from '@/pages/Collections'
import About from '@/pages/About'
import Journal from '@/pages/Journal'
import strkImgConfig from '@/strk-img-config.json'

function StockImageLoader() {
  const location = useLocation()
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        return ImageHelper.loadImages(strkImgConfig, document.body)
      } catch {
        /* noop */
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname])
  return null
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <StockImageLoader />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <section className="pt-32 md:pt-40 pb-24 container-x text-center">
                  <p className="font-serif text-4xl md:text-5xl text-espresso mb-3">
                    Not quite <span className="italic">here</span> yet.
                  </p>
                  <p className="text-muted">The page you were looking for doesn't exist.</p>
                </section>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
