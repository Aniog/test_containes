import { useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import strkImgConfig from "@/strk-img-config.json"

export default function AppShellContent() {
  const { pathname, search } = useLocation()
  const initialised = useRef(false)

  // Keep a permanent Strk image observer attached to the document body.
  // The MutationObserver inside ImageHelper will resolve any new
  // data-strk-img / data-strk-bg tag as soon as it enters the DOM,
  // including the cart drawer, modals, and route transitions.
  useEffect(() => {
    if (typeof document === "undefined") return
    if (!initialised.current) {
      initialised.current = true
      const raf = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, document.body)
      })
      return () => {
        window.cancelAnimationFrame(raf)
        ImageHelper.disconnect(document.body)
      }
    }
    // After initial mount, just re-scan on route change so any image
    // that was conditionally rendered gets resolved immediately. We do
    // NOT disconnect — the MutationObserver keeps watching the body.
    const raf = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.body)
    })
    return () => window.cancelAnimationFrame(raf)
  }, [pathname, search])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <CartDrawer />
    </>
  )
}
