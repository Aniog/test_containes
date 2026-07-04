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
import NotFound from "@/pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster
          position="bottom-center"
          toastOptions={{
            classNames: {
              toast:
                "bg-ink text-cream border border-ink/30 rounded-none shadow-2xl text-sm",
              title: "text-cream",
              description: "text-cream/80",
              actionButton: "bg-gold text-ink",
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  );
}
