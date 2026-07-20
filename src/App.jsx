import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const existingItem = cart.findIndex(
      item => item.id === product.id && item.variant === variant
    );

    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, variant, quantity }]);
    }
    
    setIsCartOpen(true);
  };

  return (
    <Router>
      <Layout 
        cart={cart} 
        setCart={setCart} 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen}
      >
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
