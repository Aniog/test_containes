import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import { CartProvider } from "@/context/CartContext";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="bg-cream py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-serif text-4xl md:text-5xl text-espresso mt-3">
        This page wandered off.
      </h1>
      <p className="mt-4 text-sm text-ash max-w-md mx-auto">
        The link you followed may be broken, or the page may have been moved.
      </p>
      <a href="/" className="mt-8 inline-block btn-primary">
        Back to Home
      </a>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
