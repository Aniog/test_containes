import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/about" element={<div className="pt-32 px-12 pb-20"><h1 className="text-4xl font-serif">About Velmora</h1><p className="mt-8 text-gray-500 max-w-2xl leading-relaxed text-lg italic">"Timeless jewelry for the modern woman who values quiet luxury and enduring quality. Each piece is crafted to tell a story, designed to be worn and treasured for generations."</p></div>} />
            <Route path="/journal" element={<div className="pt-32 px-12 pb-20"><h1 className="text-4xl font-serif">Journal</h1><p className="mt-6 text-gray-500">Coming soon...</p></div>} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
