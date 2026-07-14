import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import CartDrawer from './components/ui/CartDrawer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      ...product,
      variant,
      quantity,
    };
    
    setCart(prev => [...prev, cartItem]);
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart`, {
      description: `${variant} • $${product.price}`,
      duration: 2000,
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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Layout cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)}>
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
      
      <Toaster position="top-center" richColors closeButton />
    </Router>
  );
}

export default App;
