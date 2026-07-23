import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import { Layout } from "@/components/layout/Layout"
import { Toaster } from "@/components/ui/sonner"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:slug" element={<Product />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
