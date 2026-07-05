import { useEffect } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { CartProvider } from "@/hooks/useCart"
import CartDrawer from "@/components/layout/CartDrawer"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import AboutPage from "@/pages/AboutPage"
import HomePage from "@/pages/HomePage"
import JournalPage from "@/pages/JournalPage"
import ProductPage from "@/pages/ProductPage"
import ShopPage from "@/pages/ShopPage"
import SimplePage from "@/pages/SimplePage"
import "./App.css"

// Expose a navigate hook for the host preview bridge
function PreviewNavBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, { replace: opts.replace })
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [location.pathname, location.search])

  return null
}

function App() {
  return (
    <CartProvider>
      <PreviewNavBridge />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route
          path="/help/shipping"
          element={
            <SimplePage
              eyebrow="Help"
              title="Shipping & Returns"
              body={[
                "We offer free worldwide shipping on orders over $80. Standard orders ship within 1–3 business days from our atelier in Porto, Portugal.",
                "Not in love? Return any unworn piece within 30 days for a full refund — no questions asked. We even include a prepaid return label in every order.",
                "For any shipping or returns questions, reach us at hello@velmora.com — we typically reply within a few hours during business days.",
              ]}
            />
          }
        />
        <Route
          path="/help/care"
          element={
            <SimplePage
              eyebrow="Help"
              title="Materials & Care"
              body={[
                "Every Velmora piece is 18K gold plated over brass or sterling silver. Our posts are surgical-steel and hypoallergenic — safe for sensitive ears.",
                "To keep your pieces glowing: avoid contact with perfume, lotion, and water. Remove before showering or sleeping. Wipe gently with a soft, dry cloth after wear.",
                "Store flat in the included pouch or jewelry box. With a little care, your Velmora will stay bright for years.",
              ]}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <SimplePage
              eyebrow="Contact"
              title="We'd love to hear from you"
              body={[
                "For general questions, write to us at hello@velmora.com — we typically reply within a few hours during business days.",
                "For order questions, please include your order number in the subject line. For wholesale inquiries, please write to wholesale@velmora.com.",
              ]}
            />
          }
        />
        <Route
          path="*"
          element={
            <main className="bg-cream pt-32 pb-20 min-h-screen">
              <div className="container-velmora text-center">
                <p className="eyebrow mb-3">404</p>
                <h1 className="display-headline text-4xl md:text-6xl text-ink mb-4">
                  This page hasn't been crafted yet
                </h1>
                <p className="text-muted-light font-light mb-8">Let's get you back home.</p>
                <a href="/" className="btn-primary inline-flex">Back to Home</a>
              </div>
            </main>
          }
        />
      </Routes>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}

export default App
