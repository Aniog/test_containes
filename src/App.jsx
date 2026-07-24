import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '@/lib/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function AppRoutes() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, opts);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

