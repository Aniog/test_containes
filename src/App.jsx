import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import SimplePage from './pages/SimplePage';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/collections" element={<SimplePage title="The Collections" />} />
            <Route path="/about" element={<SimplePage title="Our Story" />} />
            <Route path="/journal" element={<SimplePage title="The Journal" />} />
            <Route path="/shipping" element={<SimplePage title="Shipping & Returns" />} />
            <Route path="/faq" element={<SimplePage title="FAQ" />} />
            <Route path="/care" element={<SimplePage title="Materials & Care" />} />
            <Route path="/contact" element={<SimplePage title="Contact Us" />} />
            <Route path="/wholesale" element={<SimplePage title="Wholesale" />} />
            <Route path="/privacy" element={<SimplePage title="Privacy Policy" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
