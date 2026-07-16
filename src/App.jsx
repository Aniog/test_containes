import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { CartProvider } from "@/components/cart/CartContext";
import Layout from "./Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Shop from "@/pages/Shop";

function PreviewRouteBridge() {
  const navigate = useNavigate();

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate;
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <PreviewRouteBridge />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
