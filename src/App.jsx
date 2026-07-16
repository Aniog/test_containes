import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      variant: product.variant || 'Gold',
      quantity: product.quantity || 1,
    };
    
    setCart(prev => [...prev, cartItem]);
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} · ${cartItem.variant}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    });
  };

  const updateCartQuantity = (index, newQuantity) => {
    setCart(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    toast.success('Thank you for your order!', {
      description: 'This is a demo. In production, this would redirect to checkout.',
    });
    setIsCartOpen(false);
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#F8F5F1]">
        <Navbar 
          cartCount={cart.length} 
          onCartOpen={() => setIsCartOpen(true)}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={<Home onAddToCart={addToCart} />} 
          />
          <Route 
            path="/shop" 
            element={<Shop onAddToCart={addToCart} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail onAddToCart={addToCart} />} 
          />
        </Routes>

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
