import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/shared/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function PlaceholderPage({ title }) {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-cormorant text-3xl sm:text-4xl uppercase tracking-wider text-charcoal mb-4">
          {title}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto" />
        <p className="text-taupe text-sm mt-4">Coming soon.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
            <Route path="/care" element={<PlaceholderPage title="Care Guide" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}
