import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Layout() {
  const location = useLocation()
  // Re-scan for stock images whenever the route changes (new tagged elements mount).
  const containerRef = useStrkImages([location.pathname, location.search])

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
