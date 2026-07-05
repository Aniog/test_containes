import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Collection from "@/pages/Collection"
import Product from "@/pages/Product"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import Placeholder from "@/pages/Placeholder"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="/contact"
              element={
                <Placeholder
                  title="Get in touch"
                  subtitle="Our atelier team replies within one business day."
                  back="/"
                  backLabel="Back to Home"
                />
              }
            />
            <Route
              path="/help/*"
              element={
                <Placeholder
                  title="Help Center"
                  subtitle="Shipping, returns, and care — all in one place."
                  back="/shop"
                  backLabel="Continue Shopping"
                />
              }
            />
            <Route
              path="*"
              element={
                <Placeholder
                  title="Page not found"
                  subtitle="The page you're looking for has slipped away."
                  back="/"
                  backLabel="Back to Home"
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
