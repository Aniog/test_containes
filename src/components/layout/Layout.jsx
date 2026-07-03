import React, { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CartDrawer from "./CartDrawer"

export default function Layout({ children }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={containerRef} className="flex min-h-screen flex-col bg-ivory">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
