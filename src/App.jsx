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
import AppShellContent from "@/components/AppShellContent"

function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      if (opts.replace) navigate(path, { replace: true })
      else navigate(path)
    }
    return () => {
      try {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      } catch {
        window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
      }
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname, location.search])

  return null
}

function AppShell() {
  return (
    <>
      <PreviewRouteBridge />
      <CartProvider>
        <AppShellContent />
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            style: {
              fontFamily: "Inter, sans-serif",
              borderRadius: 0,
              border: "1px solid rgba(31, 22, 18, 0.10)",
            },
          }}
        />
      </CartProvider>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
