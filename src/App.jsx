import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import JournalPost from "@/pages/JournalPost";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalPost />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1F1A14",
              color: "#FBF7EE",
              border: "1px solid #2A2118",
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "13px",
            },
          }}
          richColors
        />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
