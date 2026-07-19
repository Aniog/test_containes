import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import { CartProvider } from "@/hooks/useCart"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"
import Journal from "@/pages/Journal"

function NotFound() {
  return (
    <div className="pt-32 pb-24 container-x text-center">
      <p className="label-2 text-mist mb-3">404</p>
      <h1 className="font-serif text-4xl md:text-6xl text-ink mb-4">
        Not in this collection.
      </h1>
      <p className="text-ink/70 mb-8 max-w-md mx-auto">
        The piece you&rsquo;re looking for may have moved. Let&rsquo;s find
        you something else.
      </p>
      <a href="/" className="btn-primary">
        Back to Home
      </a>
    </div>
  )
}

function PreviewRouteBridge() {
  const navigate = useNavigate()
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, { replace: opts.replace })
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
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <PreviewRouteBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
