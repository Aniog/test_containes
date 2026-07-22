import { useEffect } from "react"
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CartProvider } from "@/context/CartContext"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import Collections from "@/pages/Collections"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])
  return null
}

// Global runtime image loader — scans the entire document for data-strk-img
// and data-strk-bg elements on every route change. The build-time Vite plugin
// already inlines CDN URLs into the bundle, so this is a safety net for any
// image that did not get resolved at build time.
function GlobalImageLoader() {
  const { pathname } = useLocation()
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (typeof document !== "undefined" && document.body) {
        ImageHelper.loadImages(strkImgConfig, document.body)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [pathname])
  return null
}

function NavBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    if (typeof window === "undefined") return
    window.__STRK_NAVIGATE__ = (path, { replace = false } = {}) => {
      navigate(path, { replace })
    }
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace = false } = {}) => {
      navigate(path, { replace })
    }
  }, [navigate])
  return null
}

function Shell() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-espresso-800">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<Journal />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <GlobalImageLoader />
      <NavBridge />
      <Shell />
    </CartProvider>
  )
}
