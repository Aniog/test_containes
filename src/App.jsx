import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Collections from "@/pages/Collections"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import ProductDetail from "@/pages/ProductDetail"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

