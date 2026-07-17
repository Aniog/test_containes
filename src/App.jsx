import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CartDrawer from '@/components/ui/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      cartId: Date.now(),
    };
    setCart([...cart, cartItem]);
    setIsCartOpen(true);
  };

  const updateQuantity = (index, newQuantity) => {
    const updated = [...cart];
    updated[index].quantity = newQuantity;
    setCart(updated);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF8F5]">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={
            <div className="min-h-screen pt-20 flex items-center justify-center">
              <div className="text-center max-w-md px-6">
                <h1 className="font-serif text-4xl mb-4">Our Story</h1>
                <p className="text-[#6B635C]">Coming soon. Velmora was founded with a simple belief: that beautiful jewelry should be accessible, timeless, and made with care.</p>
              </div>
            </div>
          } />
          <Route path="/journal" element={
            <div className="min-h-screen pt-20 flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-serif text-4xl mb-4">Journal</h1>
                <p className="text-[#6B635C]">Stories and inspiration coming soon.</p>
              </div>
            </div>
          } />
        </Routes>

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
