import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="/size-guide" element={<ComingSoon title="Size Guide" />} />
            <Route path="/care" element={<ComingSoon title="Care Instructions" />} />
            <Route path="/faqs" element={<ComingSoon title="FAQs" />} />
            <Route path="/sustainability" element={<ComingSoon title="Sustainability" />} />
            <Route path="/careers" element={<ComingSoon title="Careers" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

// Temporary placeholder for pages not yet built
const ComingSoon = ({ title }) => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="font-serif text-4xl text-[#1A1A1A] mb-4">{title}</h1>
      <p className="text-[#8B8178] mb-8">This page is coming soon.</p>
      <a href="/" className="text-[#C9A962] underline">Back to Home</a>
    </div>
  </div>
);

export default App;
