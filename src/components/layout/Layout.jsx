import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/ui/CartDrawer'

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <CartDrawer>
      <div ref={containerRef}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </CartDrawer>
  )
}
