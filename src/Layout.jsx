import React, { useRef, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CartDrawer from './components/common/CartDrawer'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from './strk-img-config.json'

export default function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Rerun on route change or initial mount
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col font-sans selection:bg-accent/30">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
