import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { CartProvider } from "./context/CartContext.jsx"
import Nav from "./components/layout/Nav.jsx"
import Footer from "./components/layout/Footer.jsx"
import CartDrawer from "./components/layout/CartDrawer.jsx"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import Product from "./pages/Product.jsx"
import Cart from "./pages/Cart.jsx"
import About from "./pages/About.jsx"
import Journal from "./pages/Journal.jsx"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-ivory text-ink">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
