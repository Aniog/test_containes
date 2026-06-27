import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import Collections from "@/pages/Collections"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  const pageKey = pathname
  return <div key={pageKey} className="page-enter" />
}

function AppContent() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <Navbar />
      <CartDrawer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<Collections />} />
        <Route path="/journal" element={<Collections />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
