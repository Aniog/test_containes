import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-md mx-auto px-6">
        <p className="text-overline text-gilded-600 mb-3">Coming Soon</p>
        <h1 className="text-display text-velvet-950 mb-4">{title}</h1>
        <p className="text-body text-velvet-500 mb-8">
          This page is being crafted with the same care as our jewelry. Check back soon.
        </p>
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>
  );
}

export default App;
