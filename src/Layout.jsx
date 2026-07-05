import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"

export default function Layout({ children }) {
  const { pathname } = useLocation()

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
