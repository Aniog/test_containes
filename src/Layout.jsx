import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
