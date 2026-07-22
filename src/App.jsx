import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import { Toaster } from "@/components/ui/sonner"
import Layout from "@/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"
import Journal from "@/pages/Journal"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Toaster />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
