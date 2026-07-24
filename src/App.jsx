import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/lib/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

import ImageDiscovery from '@/lib/ImageDiscovery';

function App() {
  return (
    <CartProvider>
      <Toaster position="bottom-right" />
      <ImageDiscovery />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collection/:category" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
