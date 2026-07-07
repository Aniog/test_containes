import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Placeholder routes for navigation links */}
            <Route path="/about" element={<div className="pt-40 text-center font-serif text-4xl h-screen">About Velmora</div>} />
            <Route path="/journal" element={<div className="pt-40 text-center font-serif text-4xl h-screen">The Velmora Journal</div>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
