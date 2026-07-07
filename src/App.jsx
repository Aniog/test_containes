import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import { CartProvider } from "@/lib/cartContext"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CartDrawer from "@/components/layout/CartDrawer"
import Home from "@/pages/Home"
import Collection from "@/pages/Collection"
import ProductDetail from "@/pages/ProductDetail"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-velmora-cream">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Collection />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#2C241F",
                color: "#F8F5F2",
                border: "1px solid #C5A065",
              },
            }}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
