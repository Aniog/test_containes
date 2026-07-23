import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import { CartProvider } from "@/context/CartContext"

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
  }, [location.pathname])
  return null
}

export default function Layout({ children }) {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ink text-bone">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <CartDrawer />
    </CartProvider>
  )
}
