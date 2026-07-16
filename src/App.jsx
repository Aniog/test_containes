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

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      variant,
      quantity,
      cartId: Date.now(),
    };
    setCart([...cart, cartItem]);
    toast.success(`${product.name} added to cart`);
    setIsCartOpen(true);
  };

  const updateCartItem = (index, newQuantity) => {
    const updated = [...cart];
    updated[index].quantity = newQuantity;
    setCart(updated);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    toast.info('Item removed from cart');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />
        
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
          updateCartItem={updateCartItem}
          removeFromCart={removeFromCart}
        />
        
        <Toaster position="top-center" richColors closeButton />
      </div>
    </Router>
  );
}

export default App
