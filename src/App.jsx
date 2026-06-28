import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Placeholder components
const PlaceholderPage = ({ title }) => (
  <div className="pt-40 pb-24 px-6 text-center min-h-[600px] flex flex-col items-center justify-center space-y-8">
    <h1 className="text-4xl md:text-5xl font-serif">{title}</h1>
    <p className="text-muted tracking-widest uppercase text-xs">This page is coming soon.</p>
    <a href="/" className="underline text-xs tracking-widest uppercase">Return Home</a>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<PlaceholderPage title="Our Collections" />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="The Journal" />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            
            {/* Catch-all */}
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
