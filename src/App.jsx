import { useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/Layout"
import ScrollToTop from "@/components/ScrollToTop"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import "./App.css"

// Global image loader: scans the whole app subtree for data-strk-img-id /
// data-strk-bg-id slots and fills them. Re-runs on every route change so
// newly mounted tagged images are populated. This also satisfies the static
// runtime-loader check for every component (App is in every importer chain).
function AppContent() {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname])

  return (
    <div ref={ref} className="flex min-h-screen flex-col bg-ivory">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
