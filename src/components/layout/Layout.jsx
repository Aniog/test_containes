import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/cart/CartDrawer"

export default function Layout() {
  const { pathname } = useLocation()

  // Reset scroll on route change so each page starts at the top.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-espresso">
      <Navbar />
      <main className="flex-1 pt-0">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}