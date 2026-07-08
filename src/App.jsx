import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* Header - Sticky navigation */}
        <Header />

        {/* Cart Drawer - Overlay cart panel */}
        <CartDrawer />

        {/* Main Content Routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Placeholder routes for future pages */}
          <Route path="/about" element={<ComingSoon title="About Us" />} />
          <Route path="/journal" element={<ComingSoon title="Journal" />} />
          <Route path="/collections" element={<Shop />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

// Temporary Coming Soon component for placeholder routes
function ComingSoon({ title }) {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1
          className="font-serif text-4xl lg:text-5xl mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {title}
        </h1>
        <div className="hairline w-24 mx-auto mb-8" />
        <p className="font-sans text-lg text-velmora-warm-gray max-w-2xl mx-auto">
          We're crafting something beautiful. This page will be available soon.
        </p>
      </div>
    </main>
  );
}
