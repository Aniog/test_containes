import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import NavBar from '@/components/layout/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import { useCart } from '@/context/CartContext.jsx'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()
  const { items, isCartOpen } = useCart()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, items.length, isCartOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <NavBar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
