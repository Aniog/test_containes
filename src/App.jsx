import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollToHash } from "@/components/layout/ScrollToHash"
import { ToastProvider } from "@/components/ui/Toaster"
import Home from "@/pages/Home"
import Products from "@/pages/Products"
import ProductDetail from "@/pages/ProductDetail"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToHash />
        <ScrollToTopOnRoute />
        <div className="min-h-screen flex flex-col bg-ink">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ToastProvider>
    </BrowserRouter>
  )
}
