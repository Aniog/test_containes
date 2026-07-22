import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "./strk-img-config.json"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import { useScrollReveal } from "@/lib/useScrollReveal"

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const contentRef = useRef(null)
  useScrollReveal([pathname])

  // Re-run stock image loader after each route change so newly-mounted
  // tagged elements get their `src` populated by the build-time config.
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (contentRef.current) {
        try {
          return ImageHelper.loadImages(strkImgConfig, contentRef.current)
        } catch (err) {
          console.warn("[strk-img] route load failed", err)
        }
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1" ref={contentRef}>
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
