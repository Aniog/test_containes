import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/collections" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl text-espresso mb-4">{title}</h1>
        <p className="text-charcoal/60 font-body">Coming soon</p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl text-espresso mb-4">404</h1>
        <p className="text-charcoal/60 font-body mb-8">Page not found</p>
        <a href="/" className="inline-block px-8 py-3 bg-espresso text-ivory text-sm font-body">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;
