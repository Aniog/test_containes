import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Product from './components/product/Product';
import { CartProvider } from './components/CartContext';

// Simple placeholder components for other routes
const About = () => <div className="p-24 text-center">About Page Coming Soon</div>;
const Journal = () => <div className="p-24 text-center">Journal Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
