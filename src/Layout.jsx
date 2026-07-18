import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import { useCart } from "@/context/CartContext"

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()
  const { count, isOpen } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, count, isOpen])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
