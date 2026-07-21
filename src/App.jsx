import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Collection from '@/pages/Collection';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Placeholder routes */}
          <Route path="/about" element={<ComingSoon title="Our Story" />} />
          <Route path="/journal" element={<ComingSoon title="Journal" />} />
          <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
          <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
          <Route path="/faq" element={<ComingSoon title="FAQ" />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

// Temporary placeholder component for routes not yet built
function ComingSoon({ title }) {
  return (
    <main className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-espresso mb-4">{title}</h1>
        <p className="text-cocoa mb-8">This page is coming soon.</p>
        <a href="/" className="text-champagne underline underline-offset-4">
          Return to Homepage
        </a>
      </div>
    </main>
  );
}

export default App;
