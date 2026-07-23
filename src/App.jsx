import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Navbar from '@/components/layout/Navbar.jsx';
import Footer from '@/components/layout/Footer.jsx';
import CartDrawer from '@/components/layout/CartDrawer.jsx';
import Home from '@/pages/Home.jsx';
import Shop from '@/pages/Shop.jsx';
import Product from '@/pages/Product.jsx';
import About from '@/pages/About.jsx';
import Journal from '@/pages/Journal.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-bg text-brand-ink antialiased">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
