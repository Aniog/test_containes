import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import './App.css';

function NavigateBridge() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      navigate(path, options);
    };
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
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
