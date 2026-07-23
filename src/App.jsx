import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold') => {
    const existing = cart.findIndex(item => item.id === product.id && item.variant === variant);
    if (existing !== -1) {
      const updated = [...cart];
      updated[existing].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, variant, quantity: 1 }]);
    }
    toast.success(`Added ${product.name} (${variant})`);
  };

  const updateQuantity = (index, newQuantity) => {
    const updated = [...cart];
    updated[index].quantity = newQuantity;
    setCart(updated);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F6F3]">
        <Navbar 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
          onCartOpen={() => setIsCartOpen(true)} 
        />
        
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>

        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
        
        <Toaster position="top-center" richColors closeButton />
      </div>
    </Router>
  );
}

export default App;
