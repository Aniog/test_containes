import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, rootRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <CartProvider>
      <div ref={rootRef} className="min-h-screen bg-brand-bg">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
