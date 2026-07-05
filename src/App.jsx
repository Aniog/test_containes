import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { CartProvider } from './context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ImageLoader() {
  const { pathname } = useLocation();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.getElementById('root'));
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <ImageLoader />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/journal" element={<HomePage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
