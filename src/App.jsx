import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Collection from './pages/Collection.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Placeholder routes */}
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory pt-[72px] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
          Coming Soon
        </p>
        <h1 className="font-serif text-h1 text-charcoal mb-4">{title}</h1>
        <p className="text-stone font-sans text-base mb-8 max-w-md mx-auto">
          This page is under construction. Please check back soon.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3.5 bg-gold text-white text-btn uppercase tracking-btn font-sans font-medium hover:bg-gold-dark transition-colors duration-200 rounded-btn"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
