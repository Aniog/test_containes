import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import ProductDetail from '@/pages/ProductDetail'
import Placeholder from '@/pages/Placeholder'

function RouteBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, { replace: opts?.replace })
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <RouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/collections"
              element={
                <Placeholder
                  title="Collections"
                  description="Curated edits of our finest pieces, coming soon."
                />
              }
            />
            <Route
              path="/about"
              element={
                <Placeholder
                  title="About Velmora"
                  description="Our story of craftsmanship and quiet luxury."
                />
              }
            />
            <Route
              path="/journal"
              element={
                <Placeholder
                  title="Journal"
                  description="Stories of style, craftsmanship, and the women who inspire us."
                />
              }
            />
            <Route
              path="/help"
              element={
                <Placeholder
                  title="Help & Support"
                  description="We're here to help. Reach out anytime."
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Placeholder
                  title="Checkout"
                  description="Checkout will be connected once you add a payment processor."
                />
              }
            />
            <Route
              path="*"
              element={
                <Placeholder
                  title="Page Not Found"
                  description="The page you're looking for doesn't exist."
                />
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
