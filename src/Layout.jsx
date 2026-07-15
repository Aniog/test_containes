import { useLocation } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/cart/CartDrawer"

export default function Layout({ children }) {
  const { pathname } = useLocation()
  // The home hero is dark and warm; everywhere else is light.
  const navTone = pathname === "/" ? "dark" : "light"

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar tone={navTone} />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
