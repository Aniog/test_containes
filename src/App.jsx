import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

// Simple stub for other pages
const PlaceholderPage = ({ title }) => (
  <div className="pt-40 pb-24 px-6 text-center fade-in">
    <h1 className="text-4xl md:text-6xl font-serif mb-8">{title}</h1>
    <p className="text-velmora-charcoal/60 uppercase tracking-widest max-w-xl mx-auto">
      This page is currently under refinement. We are crafting a tailored experience to share more about Velmora.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} /> {/* Alias for now */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="The Journal" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
            <Route path="/materials" element={<PlaceholderPage title="Materials & Care" />} />
            {/* 404 */}
            <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
