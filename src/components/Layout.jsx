import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Layout() {
  const location = useLocation()
  // Re-scan for strk images on every route change
  const containerRef = useStrkImages([location.pathname, location.search])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
