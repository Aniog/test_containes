import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartDrawer from './components/shop/CartDrawer';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<CollectionPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        {/* Placeholder routes for others pointing to /shop */}
        <Route path="/collections" element={<CollectionPage />} />
        <Route path="/category/:category" element={<CollectionPage />} />
        <Route path="*" element={<CollectionPage />} /> 
      </Routes>
      <CartDrawer />
    </>
  );
}

export default App;
