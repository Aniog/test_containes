import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext.jsx';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import CartDrawer from '@/components/ui/CartDrawer.jsx';
import StockImageCache from '@/components/StockImageCache.jsx';
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
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <StockImageCache />
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
