import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import { Layout } from "@/components/layout/Layout"
import { Home } from "@/pages/Home"
import { Shop } from "@/pages/Shop"
import { ProductDetail } from "@/components/product/ProductDetail"

// Bridge for the preview iframe so deep links navigate inside the SPA
function PreviewRouterBridge() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace = false } = {}) => {
      navigate(path, { replace })
    }
    return () => { delete window.__STRIKINGLY_PREVIEW_NAVIGATE__ }
  }, [navigate])
  useEffect(() => {
    // Sync to top on every route change
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.search])
  return null
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewRouterBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<Home />} />
            <Route path="/journal" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
