import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Shop from './pages/Shop.jsx';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" richColors />
      </CartProvider>
    </Router>
  );
}

export default App;
