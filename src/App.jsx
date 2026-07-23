import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Layout from '@/components/Layout.jsx';
import Footer from '@/components/Footer.jsx';
import Home from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import ProductDetail from '@/pages/ProductDetail.jsx';
import About from '@/pages/About.jsx';
import Journal from '@/pages/Journal.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
