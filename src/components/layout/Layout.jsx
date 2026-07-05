import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CartDrawer from "./CartDrawer"

export default function Layout({ children }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-bone text-ink-soft">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
