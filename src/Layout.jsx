import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "@/components/Navbar.jsx"
import Footer from "@/components/Footer.jsx"
import CartDrawer from "@/components/CartDrawer.jsx"

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
