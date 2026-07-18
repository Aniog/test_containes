import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [pathname])

  return (
    <div ref={containerRef}>
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
