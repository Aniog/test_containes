import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StickyNav from '@/components/layout/StickyNav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout() {
  const containerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-cream">
      <StickyNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
