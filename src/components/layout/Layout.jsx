import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import Nav from "./Nav"
import Footer from "./Footer"
import CartDrawer from "@/components/cart/CartDrawer"
import { useCartUi } from "@/context/CartContext"
import strkImgConfig from "@/strk-img-config.json"

export default function Layout() {
  const { isOpen, closeCart } = useCartUi()
  const location = useLocation()

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.search])

  // Run once at app mount. The ImageHelper installs a MutationObserver so
  // dynamic lists, modals, filters, and route changes are all resolved
  // automatically without per-component wiring.
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer open={isOpen} onClose={closeCart} />
    </div>
  )
}
