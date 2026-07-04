import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import Footer from '@/components/Footer'

export default function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-base">
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
