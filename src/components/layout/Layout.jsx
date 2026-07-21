import React, { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import Navbar from "./Navbar"
import Footer from "./Footer"
import CartDrawer from "./CartDrawer"
import { useScrollToTop } from "../../lib/useScrollToTop"

const TRANSPARENT_ROUTES = new Set(["/"])

export default function Layout() {
  const { pathname } = useLocation()
  const rootRef = useRef(null)
  useScrollToTop()

  const navTone = TRANSPARENT_ROUTES.has(pathname) ? "auto" : "solid"

  useEffect(() => {
    if (!rootRef.current) return
    // Rescan images after each route change since the DOM has been swapped.
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, rootRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div ref={rootRef} className="min-h-screen bg-bone-50 text-ink">
      <Navbar tone={navTone} />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
