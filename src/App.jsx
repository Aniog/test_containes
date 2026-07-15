import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Layout from "@/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import Product from "@/pages/Product"
import Placeholder from "@/pages/Placeholder"
import { CartProvider } from "@/context/CartContext"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/about"
              element={
                <Placeholder
                  eyebrow="Our Story"
                  title="A note from the studio is coming."
                />
              }
            />
            <Route
              path="/journal"
              element={
                <Placeholder
                  eyebrow="Journal"
                  title="The Journal is being written."
                />
              }
            />
            <Route
              path="*"
              element={
                <Placeholder
                  eyebrow="404"
                  title="This page has wandered off."
                />
              }
            />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}
