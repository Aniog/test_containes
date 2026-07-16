import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailPage from '@/pages/ProductDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App
