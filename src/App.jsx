import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import './App.css';

// Bridge for preview system navigation
function NavigateBridge() {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
        if (options?.replace) {
          navigate(path, { replace: true });
        } else {
          navigate(path);
        }
      };
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigateBridge />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
