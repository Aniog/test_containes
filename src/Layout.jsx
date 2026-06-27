import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import { useStrkImages } from "@/hooks/useStrkImages"

export default function Layout() {
  const location = useLocation()
  // Re-scan for strk images whenever the route changes (new image nodes mount).
  const ref = useStrkImages([location.pathname, location.search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div ref={ref} className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
