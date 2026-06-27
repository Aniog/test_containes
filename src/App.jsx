import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

// Bridge so the preview iframe can drive navigation
function PreviewNavBridge() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => navigate(path, opts);
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewNavBridge />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            {/* Lightweight stubs for nav links */}
            <Route path="about" element={<SimplePage title="Our Story" body="A quiet kind of luxury, hand-finished in our New York studio. Full story coming soon." />} />
            <Route path="journal" element={<SimplePage title="Journal" body="Editorial notes from the Velmora atelier — coming soon." />} />
            <Route path="*" element={<SimplePage title="Page Not Found" body="The page you're looking for has wandered off. Browse the collection instead." />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function SimplePage({ title, body }) {
  return (
    <section className="pt-32 md:pt-40 pb-24 max-w-2xl mx-auto px-6 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-4">Velmora</p>
      <h1 className="font-serif text-5xl md:text-6xl text-ink leading-tight">{title}</h1>
      <p className="mt-6 text-ink-soft leading-relaxed">{body}</p>
    </section>
  );
}
