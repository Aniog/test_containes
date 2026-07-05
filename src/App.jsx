import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/checkout" element={
            <div className="max-w-2xl mx-auto px-6 pt-32 pb-20 text-center">
              <h1 className="heading-serif text-4xl mb-4">Checkout</h1>
              <p className="text-[#6B665F]">Checkout flow would be integrated here with a payment provider.</p>
            </div>
          } />
        </Routes>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
