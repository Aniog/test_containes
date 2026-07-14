import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Collection from '@/pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl text-velmora-charcoal mb-4">{title}</h1>
        <p className="text-velmora-taupe">Coming soon</p>
      </div>
    </div>
  );
}

export default App;
