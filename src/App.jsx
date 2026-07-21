import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import Button from "@/components/ui/Button"

function Placeholder({ title, blurb }) {
  return (
    <section className="min-h-[70vh] pt-32 md:pt-40 pb-20 bg-bone">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
        <p className="text-[10px] tracking-widest3 uppercase text-champagne-deep mb-4">
          Coming Soon
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink tracking-tight">
          {title}
        </h1>
        <p className="mt-5 text-muted text-[15px] leading-relaxed">
          {blurb}
        </p>
        <div className="mt-10">
          <Button as={Link} to="/shop" variant="primary" size="md">
            Shop the Collection
          </Button>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/about"
              element={
                <Placeholder
                  title="Our Story"
                  blurb="Velmora began with a simple belief — that fine jewelry should be worn, not stored. Our atelier story is coming soon."
                />
              }
            />
            <Route
              path="/journal"
              element={
                <Placeholder
                  title="The Velmora Journal"
                  blurb="Styling notes, behind-the-scenes from the atelier, and quiet conversations about jewelry and life. Coming soon."
                />
              }
            />
            <Route
              path="*"
              element={
                <Placeholder
                  title="Page not found"
                  blurb="The page you're looking for doesn't exist. Take a look at our latest collection instead."
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App

