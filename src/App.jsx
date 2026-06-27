import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import { CartProvider } from "@/context/CartContext"
import { UIProvider } from "@/context/UIContext"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import Cart from "@/pages/Cart"
import Collections from "@/pages/Collections"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="shop/:productId" element={<ProductDetail />} />
              <Route path="collections" element={<Collections />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="journal" element={<Journal />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </UIProvider>
    </BrowserRouter>
  )
}
