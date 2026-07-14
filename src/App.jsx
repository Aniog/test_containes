import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[var(--velmora-bg)]">
          <Nav />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
