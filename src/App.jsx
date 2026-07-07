import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import ScrollToTop from "@/components/layout/ScrollToTop"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import "./App.css"

function NotFound() {
  return (
    <div className="container-editorial flex min-h-[70vh] flex-col items-center justify-center gap-4 pt-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-5xl font-light text-ink">
        Page not found
      </h1>
      <p className="font-serif text-lg italic text-stone">
        The page you are looking for has wandered off.
      </p>
      <a href="/" className="btn-accent mt-2">
        Return Home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-ivory">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}
