import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import Collection from "@/pages/Collection"
import ProductDetail from "@/pages/ProductDetail"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Collection />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1a1a1a",
            color: "#f7f3ed",
            border: "1px solid #bfa268",
          },
        }}
      />
    </CartProvider>
  )
}

export default App
