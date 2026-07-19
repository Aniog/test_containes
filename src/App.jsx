import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

// Placeholder components for routes not yet implemented
const AboutPlaceholder = () => <div className="pt-32 pb-64 text-center font-serif text-2xl h-screen">About Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPlaceholder />} />
          <Route path="*" element={<div className="pt-32 text-center h-screen">404 - Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
