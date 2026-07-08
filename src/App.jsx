import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    async function loadImages() {
      if (!containerRef.current) return;
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const config = await import('./strk-img-config.json');
        if (!cancelled && ImageHelper && containerRef.current) {
          ImageHelper.loadImages(config.default || config, containerRef.current);
        }
      } catch (err) {
        console.warn('Image system unavailable:', err);
      }
    }
    loadImages();
    return () => { cancelled = true; };
  }, []);

  return (
    <CartProvider>
      <Router>
        <div ref={containerRef}>
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
