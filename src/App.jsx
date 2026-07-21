import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";

/**
 * Top-level app shell. Provides the cart context and the layout wrapper
 * (navbar, footer, cart drawer) for every route. New pages are added to the
 * `<Routes>` block below.
 */
export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="*"
              element={
                <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
                  <p className="eyebrow text-taupe-500">404</p>
                  <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-espresso">
                    This page is still in the workshop.
                  </h1>
                  <p className="mt-4 text-taupe-500 max-w-md">
                    The link you followed doesn't lead anywhere yet. Try the
                    collection instead.
                  </p>
                  <a href="/shop" className="btn-primary mt-8">
                    Shop the Collection
                  </a>
                </div>
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
