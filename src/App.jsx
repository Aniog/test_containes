import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"

import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import Collections from "@/pages/Collections"
import About from "@/pages/About"
import Journal from "@/pages/Journal"

import { CartProvider } from "@/context/CartContext"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])
  return null
}

function PreviewNavigateBridge() {
  // Allows the parent preview iframe to navigate the SPA via postMessage.
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      if (replace) window.history.replaceState({}, "", path)
      else window.history.pushState({}, "", path)
      window.dispatchEvent(new PopStateEvent("popstate", { state: {} }))
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [])
  return null
}

function NotFound() {
  return (
    <section className="pt-40 pb-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-[64px] sm:text-[80px] mt-3 text-espresso">
        Lost in the studio
      </h1>
      <p className="mt-4 text-[15px] text-mocha-500 max-w-md mx-auto">
        The page you're looking for has wandered off. Let's get you back to the
        collection.
      </p>
      <Link to="/" className="btn-primary mt-8">Return Home</Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewNavigateBridge />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/shop"        element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about"       element={<About />} />
            <Route path="/journal"     element={<Journal />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
