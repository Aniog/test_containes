import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import './App.css'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import RouteBridge from '@/components/layout/RouteBridge'
import CartDrawer from '@/components/store/CartDrawer'
import { StoreProvider } from '@/components/store/StoreContext'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ShopPage from '@/pages/ShopPage'
import strkImgConfig from '@/strk-img-config.json'

const ScrollManager = () => {
  const location = useLocation()

  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname, location.search])

  return null
}

const ImageLoader = ({ children }) => {
  const containerRef = React.useRef(null)
  const location = useLocation()

  React.useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.hash, location.pathname, location.search])

  return <div ref={containerRef}>{children}</div>
}

const AppShell = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollManager />
        <RouteBridge />
        <ImageLoader>
          <div className="min-h-screen bg-velmora-paper text-velmora-ink">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/products/:slug" element={<ProductPage />} />
            </Routes>
            <Footer />
            <CartDrawer />
          </div>
        </ImageLoader>
      </BrowserRouter>
    </StoreProvider>
  )
}

function App() {
  return <AppShell />
}

export default App
