import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import Placeholder from "@/pages/Placeholder";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/about"
              element={
                <Placeholder
                  eyebrow="The House of Velmora"
                  title="Heirlooms in the making."
                  body="Velmora began at a small bench in Jaipur, with a single brass cuff and a notebook of botanical drawings. Today every piece is cast in small batches by a workshop of seven, finished by hand, and shipped from a quiet studio in Brooklyn."
                  bgId="about-hero"
                  bgQuery="[about-hero-title] [about-hero-eyebrow]"
                />
              }
            />
            <Route
              path="/journal"
              element={
                <Placeholder
                  eyebrow="The Journal"
                  title="Stories from the bench."
                  body="Studio notes, lookbooks, and the occasional dispatch on craft. Coming soon."
                  bgId="journal-hero"
                  bgQuery="[journal-hero-title] [journal-hero-eyebrow]"
                />
              }
            />
            <Route
              path="*"
              element={
                <div className="container-shell py-32 text-center">
                  <h1 className="font-serif text-4xl text-ink">Lost the thread.</h1>
                  <p className="mt-3 text-muted">That page doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </Layout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1F1A14",
              color: "#F6F1EA",
              border: "1px solid #2A241B",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
            },
          }}
        />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
