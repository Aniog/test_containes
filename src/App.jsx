import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './lib/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Layout from './Layout';
import { Toaster } from 'sonner';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" richColors />
    </CartProvider>
  );
}

export default App;
