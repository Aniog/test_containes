import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout.jsx';
import Home from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import ProductDetail from '@/pages/ProductDetail.jsx';
import About from '@/pages/About.jsx';
import Journal from '@/pages/Journal.jsx';
import './App.css';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    if (appRef.current) {
      ImageHelper.loadImages(strkImgConfig, appRef.current);
    }
  }, []);

  return (
    <div ref={appRef}>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;


// 1784827753 refresh
