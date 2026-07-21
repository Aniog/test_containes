import React, { useEffect, useRef } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import Collections from "@/pages/Collections"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import Search from "@/pages/Search"
import "./App.css"

function Shell() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/search" element={<Search />} />
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
    <BrowserRouter>
      <CartProvider>
        <Shell />
      </CartProvider>
    </BrowserRouter>
  )
}
