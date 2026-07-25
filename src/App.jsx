import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/Layout"
import Home from "@/pages/Home"
import ShopPage from "@/pages/ShopPage"
import ProductPage from "@/pages/ProductPage"
import { AboutPage, CollectionsPage, JournalPage } from "@/pages/SimplePages"

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 pt-20 text-center">
      <p className="font-serif text-5xl font-light text-noir">Page not found</p>
      <a
        href="/"
        className="text-[11px] font-medium uppercase tracking-[0.25em] text-gold-deep hover:text-noir"
      >
        Return home
      </a>
    </div>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
