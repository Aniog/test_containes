import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<About />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
