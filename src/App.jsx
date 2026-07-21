import { useEffect, useMemo, useRef, useState } from "react"
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import SiteLayout from "@/components/layout/SiteLayout"
import AboutPage from "@/pages/AboutPage"
import CollectionsPage from "@/pages/CollectionsPage"
import HomePage from "@/pages/HomePage"
import JournalPage from "@/pages/JournalPage"
import ProductPage from "@/pages/ProductPage"
import ShopPage from "@/pages/ShopPage"
import strkImgConfig from "@/strk-img-config.json"
import "./App.css"

const AppShell = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname, location.search])

  useEffect(() => {
    let cleanup

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === "function") {
        cleanup()
      }
    }
  }, [location.pathname, location.search])

  const addToCart = (product, { tone, quantity }) => {
    const variant = tone || product.tones[0]
    const key = `${product.id}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === key)

      if (existingItem) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          variant,
          price: product.price,
          quantity,
        },
        ...current,
      ]
    })

    setIsCartOpen(true)
  }

  const updateCartQuantity = (key, nextQuantity) => {
    setCartItems((current) => {
      if (nextQuantity <= 0) {
        return current.filter((item) => item.key !== key)
      }

      return current.map((item) =>
        item.key === key ? { ...item, quantity: nextQuantity } : item,
      )
    })
  }

  const removeCartItem = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartSubtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory">
      <Routes>
        <Route
          element={
            <SiteLayout
              cartCount={cartCount}
              cartItems={cartItems}
              cartSubtotal={cartSubtotal}
              isCartOpen={isCartOpen}
              onOpenCart={() => setIsCartOpen(true)}
              onCloseCart={() => setIsCartOpen(false)}
              onUpdateCartQuantity={updateCartQuantity}
              onRemoveCartItem={removeCartItem}
            />
          }
        >
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/collections" element={<CollectionsPage onAddToCart={addToCart} />} />
          <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Route>
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
