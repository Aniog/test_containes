import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/Layout"
import HomePage from "@/pages/HomePage"
import ShopPage from "@/pages/ShopPage"
import CollectionsPage from "@/pages/CollectionsPage"
import AboutPage from "@/pages/AboutPage"
import JournalPage from "@/pages/JournalPage"
import ProductPage from "@/pages/ProductPage"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
