import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import { CartProvider } from '@/lib/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            {/* Fallback routes could go here */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
