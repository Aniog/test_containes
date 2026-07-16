import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import { CartProvider } from './lib/CartContext';
import { Toaster } from 'sonner';
import './App.css';

const PlainPage = ({ title }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 min-h-[60vh]">
    <h1 className="text-4xl font-serif mb-8 uppercase tracking-widest">{title}</h1>
    <p className="text-muted-foreground italic tracking-widest uppercase text-xs">Coming soon. We are crafting something special.</p>
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
            <Route path="/product/:id" element={<Product />} />
            <Route path="/collections" element={<PlainPage title="Collections" />} />
            <Route path="/about" element={<PlainPage title="About Us" />} />
            <Route path="/journal" element={<PlainPage title="Journal" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
      <Toaster position="bottom-right" />
    </CartProvider>
  );
}

export default App;
