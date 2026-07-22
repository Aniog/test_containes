import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Product from '@/pages/Product';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/product/:id" element={<Layout><Product /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/journal" element={<Layout><Journal /></Layout>} />
        </Routes>
        <Toaster position="bottom-right" richColors />
      </Router>
    </CartProvider>
  );
}

export default App;
