import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Layout() {
  const location = useLocation()
  // Scan the whole layout subtree for strk image slots whenever the route
  // changes, so newly mounted page images get populated.
  const ref = useStrkImages([location.pathname, location.search])

  return (
    <div ref={ref} className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
