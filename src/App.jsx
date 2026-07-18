import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import CartDrawer from './components/CartDrawer';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold') => {
    const cartItem = { ...product, variant, quantity: 1 };
    setCart([...cart, cartItem]);
    toast.success(`${product.name} added to cart`);
    setIsCartOpen(true);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const newCart = [...cart];
    newCart[index].quantity = newQuantity;
    setCart(newCart);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Layout cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </Layout>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <Toaster position="top-center" richColors closeButton />
    </Router>
  );
}

export default App;
