import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function PreviewBridge() {
  const navigate = useNavigate();

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, opts);
    };
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <CartProvider>
        <PreviewBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
