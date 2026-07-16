import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Shop from '@/pages/Shop';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, appRef.current);
  }, []);

  return (
    <div ref={appRef}>
      <Router>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:category" element={<Shop />} />
            </Routes>
          </Layout>
        </CartProvider>
      </Router>
    </div>
  );
}
