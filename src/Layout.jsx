import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import CartDrawer from "@/components/cart/CartDrawer.jsx"
import Footer from "@/components/layout/Footer.jsx"
import Header from "@/components/layout/Header.jsx"
import { useCart } from "@/context/CartContext.jsx"

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()
  const { items, itemCount, isCartOpen, openCart, closeCart, updateQuantity, removeItem } = useCart()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, items.length, isCartOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Header itemCount={itemCount} onCartOpen={openCart} />
      {children}
      <Footer />
      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
        items={items}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  )
}
