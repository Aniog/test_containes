import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/layout/CartDrawer';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedTone === product.selectedTone);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedTone === product.selectedTone) 
            ? { ...item, quantity: item.quantity + (product.quantity || 1) } 
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemToUpdate, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(itemToUpdate);
      return;
    }
    setCartItems(prev => prev.map(item => 
      (item.id === itemToUpdate.id && item.selectedTone === itemToUpdate.selectedTone) 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  const handleRemoveItem = (itemToRemove) => {
    setCartItems(prev => prev.filter(item => 
      !(item.id === itemToRemove.id && item.selectedTone === itemToRemove.selectedTone)
    ));
  };

  return (
    <Router>
      <Layout onCartOpen={() => setIsCartOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Routes>
      </Layout>
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
    </Router>
  );
}

export default App;
