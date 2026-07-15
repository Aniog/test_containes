import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import CartDrawer from '@/components/layout/CartDrawer.jsx';
import Home from '@/pages/Home.jsx';
import Product from '@/pages/Product.jsx';
import Shop from '@/pages/Shop.jsx';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-brand-bg flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-serif text-4xl mb-4">{title}</h1>
      <p className="text-brand-muted">This page is coming soon.</p>
    </div>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-bg text-brand-ink">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
