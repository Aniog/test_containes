import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Layout from "./Layout.jsx";
import Home from "@/pages/Home.jsx";
import Shop from "@/pages/Shop.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import About from "@/pages/About.jsx";
import Journal from "@/pages/Journal.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
