import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import Layout from "@/Layout"
import Home from "@/pages/Home"
import Shop from "@/pages/Shop"
import ProductDetail from "@/pages/ProductDetail"
import About from "@/pages/About"
import Journal from "@/pages/Journal"
import PlaceholderPage from "@/pages/PlaceholderPage"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="/account"
              element={
                <PlaceholderPage
                  eyebrow="Account"
                  heading="Sign in to your account."
                  body="View your orders, save your favorites and check out faster."
                  ctaLabel="Browse the collection"
                  ctaHref="/shop"
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  eyebrow="Get in touch"
                  heading="We'd love to hear from you."
                  body="For order questions, email hello@velmora.com — we reply within one business day."
                  ctaLabel="Browse the collection"
                  ctaHref="/shop"
                />
              }
            />
            <Route
              path="/help/:topic"
              element={
                <PlaceholderPage
                  eyebrow="Help"
                  heading="Support, made simple."
                  body="Find shipping, returns and care information here. For anything else, we're a tap away."
                  ctaLabel="Browse the collection"
                  ctaHref="/shop"
                />
              }
            />
            <Route
              path="*"
              element={
                <PlaceholderPage
                  eyebrow="404"
                  heading="This page slipped away."
                  body="The page you were looking for has wandered off. Try the collection instead."
                  ctaLabel="Back to shopping"
                  ctaHref="/shop"
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
