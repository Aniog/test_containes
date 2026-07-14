import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Nav from "@/components/ui/Nav.jsx"
import Footer from "@/components/ui/Footer.jsx"
import CartDrawer from "@/components/ui/CartDrawer.jsx"

export default function Layout({ children, transparentNav = false }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Nav variant={transparentNav ? "default" : "solid"} />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
