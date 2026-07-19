import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { CartProvider, useCart } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

const PageObserver = () => {
  const { pathname, search } = useLocation();
  const { isCartOpen } = useCart();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Load images on change
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, document.getElementById('root'));
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, search, isCartOpen]);

  return null;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <PageObserver />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
