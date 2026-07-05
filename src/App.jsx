import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

// Placeholder pages
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 text-center">
    <h1 className="font-serif text-3xl font-light tracking-[0.05em]">{title}</h1>
    <div className="w-12 h-[1px] bg-[#b68860] mx-auto mt-4" />
    <p className="mt-4 font-sans text-sm text-[hsl(var(--muted-foreground))]">
      Coming soon.
    </p>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
        <Route path="/about" element={<PlaceholderPage title="About Velmora" />} />
        <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
      </Route>
    </Routes>
  );
}
