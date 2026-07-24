import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0 });
  }, []);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route
              path="*"
              element={
                <div className="bg-ivory pt-32 pb-20 min-h-[60vh]">
                  <h1 className="font-serif text-4xl text-ink">Page not found.</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
