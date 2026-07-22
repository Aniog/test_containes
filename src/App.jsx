import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import './App.css';

export default function App() {
  useEffect(() => {
    if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === undefined) {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
        const { replace } = opts || {};
        if (replace) {
          window.history.replaceState({}, '', path);
        } else {
          window.history.pushState({}, '', path);
        }
        window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      };
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#1A1817',
              color: '#FDF8F3',
              border: '1px solid #C8A96E',
              fontSize: '13px',
              borderRadius: 0,
            },
          }}
        />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
