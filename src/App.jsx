import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout.jsx"
import { CartProvider } from "@/context/CartContext"
import Home from "@/pages/Home.jsx"
import Shop from "@/pages/Shop.jsx"
import Collections from "@/pages/Collections.jsx"
import ProductDetail from "@/pages/ProductDetail.jsx"
import About from "@/pages/About.jsx"
import Journal from "@/pages/Journal.jsx"
import "./App.css"

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
