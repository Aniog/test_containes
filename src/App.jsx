import React from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import { CartProvider } from "./lib/cart"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Collections from "./pages/Collections"
import Product from "./pages/Product"
import About from "./pages/About"
import Journal from "./pages/Journal"
import NotFound from "./pages/NotFound"

function RouteBridge() {
  const navigate = useNavigate()
  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      if (options.replace) {
        navigate(path, { replace: true })
      } else {
        navigate(path)
      }
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])
  return null
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <RouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast:
              "bg-ink text-bone border border-ink/20 text-[12px] uppercase tracking-[0.18em] font-medium",
            description: "text-bone/70",
            title: "text-bone",
          },
        }}
      />
    </CartProvider>
  )
}
