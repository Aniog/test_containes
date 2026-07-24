import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom"
import { Toaster } from "sonner"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import SimplePage from "@/pages/SimplePage"
import NotFound from "@/pages/NotFound"
import "./App.css"

function PreviewRouteBridge() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window === "undefined") return
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, { replace } = {}) => {
      if (replace) navigate(path, { replace: true })
      else navigate(path)
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.parent === window) return
    try {
      window.parent.postMessage(
        {
          channel: "strikingly-preview",
          version: 1,
          type: "route:changed",
          payload: {
            url: window.location.href,
            origin: window.location.origin,
            path: `${location.pathname}${location.search}${location.hash}`,
            pathname: location.pathname,
            search: location.search,
            hash: location.hash,
            title: document.title,
            source: "react",
            timestamp: Date.now(),
          },
        },
        "*",
      )
    } catch {
      /* ignore */
    }
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/about"
              element={
                <SimplePage
                  eyebrow="Our Story"
                  title="Made for the everyday ritual."
                  body="Velmora began with a single question — why does fine jewelry so often live in a box? We design pieces meant to be worn. Every piece is plated in 18K gold, hypoallergenic, and finished by hand in small batches."
                  cta={{ to: "/shop", label: "Shop the Collection" }}
                />
              }
            />
            <Route
              path="/journal"
              element={
                <SimplePage
                  eyebrow="The Velmora Journal"
                  title="Stories, coming soon."
                  body="A quiet journal on the craft of jewelry, the women we make it for, and the small rituals that hold a day together."
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#14110F",
              color: "#F7F2EA",
              border: "1px solid rgba(225,209,184,0.18)",
              fontSize: "13px",
              letterSpacing: "0.04em",
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
