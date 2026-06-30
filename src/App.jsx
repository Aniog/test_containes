import React, { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import ImageLoader from "@/components/layout/ImageLoader"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import Collection from "@/pages/Collection"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import Checkout from "@/pages/Checkout"
import NotFound from "@/pages/NotFound"
import ImageManifest from "@/components/ImageManifest"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const isCheckout = location.pathname === "/checkout"

  return (
    <div className="min-h-screen flex flex-col bg-cream text-espresso">
      {!isCheckout && <Header tone={isHome ? "auto" : "dark"} />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/:slug" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isCheckout && <Footer />}
      <CartDrawer />
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ImageLoader />
        <ScrollToTop />
        <AppShell />
      </BrowserRouter>
    </CartProvider>
  )
}
