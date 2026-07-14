import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom"
import { AppProviders } from "@/lib/cart-context.jsx"
import Layout from "@/components/ui/Layout.jsx"
import HomePage from "@/pages/HomePage.jsx"
import ShopPage from "@/pages/ShopPage.jsx"
import ProductPage from "@/pages/ProductPage.jsx"
import AboutPage from "@/pages/AboutPage.jsx"
import JournalPage from "@/pages/JournalPage.jsx"
import CheckoutPage from "@/pages/CheckoutPage.jsx"

function RouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      if (opts.replace) navigate(path, { replace: true })
      else navigate(path)
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])
  useEffect(() => {
    // ensure the bridge is set immediately for the first paint
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      if (opts.replace) navigate(path, { replace: true })
      else navigate(path)
    }
  }, [location])
  return null
}

function AppRoutes() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  return (
    <Layout transparentNav={isHome}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <RouteBridge />
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  )
}
