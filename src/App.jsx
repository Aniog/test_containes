import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout.jsx';
import Home from '@/pages/Home.jsx';
import ShopPage from '@/pages/ShopPage.jsx';
import ProductPage from '@/pages/ProductPage.jsx';
import './App.css';

function AppRoutes() {
  const rootRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, rootRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return (
    <div ref={rootRef}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
