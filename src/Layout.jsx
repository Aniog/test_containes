import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { useStrkImages } from "@/lib/use-strk-images"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"

export default function Layout() {
  const location = useLocation()
  const containerRef = useStrkImages([location.pathname, location.search])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname, location.search])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-ivory font-sans text-noir">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
