import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import SearchOverlay from "@/components/layout/SearchOverlay"
import { useEffect } from "react"

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
