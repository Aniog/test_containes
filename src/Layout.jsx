import { Routes, Route } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartDrawer from "@/components/CartDrawer"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import NotFound from "@/pages/NotFound"

export default function Layout() {
  const { openCart } = useCart()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar onOpenCart={openCart} />
      <CartDrawer />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
