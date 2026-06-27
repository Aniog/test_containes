import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';

function Placeholder({ title, eyebrow }) {
  return (
    <section className="bg-cream pt-40 pb-32 min-h-[60vh]">
      <div className="mx-auto max-w-[900px] px-6 md:px-10 text-center">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          {title}
        </h1>
        <p className="mt-7 text-charcoal max-w-xl mx-auto leading-relaxed">
          This page is part of the store shell and is ready for full content.
          The collection is live — explore what's already here.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route
              path="/about"
              element={<Placeholder eyebrow="Our Story" title="Quietly Crafted" />}
            />
            <Route
              path="/journal"
              element={<Placeholder eyebrow="Journal" title="Stories from Velmora" />}
            />
            <Route
              path="/checkout"
              element={<Placeholder eyebrow="Checkout" title="A Quiet Checkout" />}
            />
            <Route
              path="*"
              element={
                <Placeholder eyebrow="Not Found" title="We couldn't find that page" />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}