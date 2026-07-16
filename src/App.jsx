import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

const PlaceholderPage = ({ title }) => (
  <div className="pt-40 pb-24 text-center">
    <h1 className="text-4xl font-serif mb-4">{title}</h1>
    <p className="font-serif italic text-stone-400">This page is coming soon.</p>
  </div>
);

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<PlaceholderPage title="Collections" />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
