import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import Collections from "@/pages/Collections";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Checkout from "@/pages/Checkout";

function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-serif text-4xl mb-3">This page wandered off.</h1>
      <p className="text-mocha mb-6 max-w-sm">
        The piece you're looking for has been moved or never existed. Let's
        get you back to the collection.
      </p>
      <a href="/" className="btn btn-primary">Return Home</a>
    </main>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
