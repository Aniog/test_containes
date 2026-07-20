import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/layout/CartDrawer.jsx'
import { useCart } from './context/CartContext.jsx'

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()
  const { count, isOpen } = useCart()

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [location.pathname, location.search, count, isOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment text-cocoa">
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
