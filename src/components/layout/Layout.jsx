import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout() {
  const { pathname, search } = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = null
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [pathname, search])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-paper text-velmora-cocoa">
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
