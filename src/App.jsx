import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/store/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";

function RoutedApp() {
  const location = useLocation();
  const showAnnouncement = location.pathname === "/";

  return (
    <Layout showAnnouncement={showAnnouncement}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<Journal />} />
        <Route
          path="*"
          element={
            <div className="mx-auto max-w-content px-5 md:px-8 py-40 text-center">
              <p className="serif-display text-5xl md:text-6xl text-cocoa">404</p>
              <p className="mt-4 text-base text-muted">This page is resting. Try the shop instead.</p>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <RoutedApp />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
