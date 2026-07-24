import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Checkout from "@/pages/Checkout";
import SimplePage from "@/pages/SimplePage";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/about"
              element={
                <SimplePage
                  eyebrow="Our Story"
                  title="Heirlooms in the making."
                  body="A small atelier in Lisbon, making demi-fine gold jewelry designed to be lived in. Founded in 2021."
                  cta={{ to: "/shop", label: "Shop the Collection" }}
                />
              }
            />
            <Route
              path="/journal"
              element={
                <SimplePage
                  eyebrow="The Journal"
                  title="Stories from the atelier."
                  body="Coming soon. New pieces, jewelry care, and the people who wear Velmora."
                  cta={{ to: "/shop", label: "Shop in the meantime" }}
                />
              }
            />
            <Route
              path="/account"
              element={
                <SimplePage
                  eyebrow="Account"
                  title="Sign in to your atelier."
                  body="Order history, wishlist, and exclusive early access live here."
                />
              }
            />
            <Route
              path="*"
              element={
                <SimplePage
                  eyebrow="404"
                  title="This page slipped between the velvet."
                  body="Let's get you back to the collection."
                  cta={{ to: "/", label: "Back to home" }}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
