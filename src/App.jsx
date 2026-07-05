import { useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { CartProvider, useCart } from "@/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/cart/CartDrawer"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import About from "@/pages/About"

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-brand-bg text-brand-ink">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main className={pathname === "/" ? "" : "pt-16 md:pt-20"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  )
}

