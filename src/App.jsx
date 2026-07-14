import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import "./App.css"

import { CartProvider } from "@/context/CartContext"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import About from "@/pages/About"
import NotFound from "@/pages/NotFound"

/**
 * Bridge from the runtime preview navigator: when the host asks us to
 * navigate via postMessage, forward that into React Router.
 */
function PreviewNavigator() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      if (replace) navigate(path, { replace: true })
      else navigate(path)
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
  }, [location.pathname, location.search])

  return null
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewNavigator />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
