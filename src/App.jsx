import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import { Toaster } from "@/components/ui/sonner"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import NotFound from "@/pages/NotFound"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-ink text-cream flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                color: "#f6f1eb",
              },
            }}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
