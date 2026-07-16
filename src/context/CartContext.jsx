import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.tone === tone);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.tone === tone 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, tone) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.tone === tone)));
  };

  const updateQuantity = (id, tone, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.id === id && item.tone === tone
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);
  const openCart = () => setIsCartOpen(true);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      cartTotal,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleCart,
      closeCart,
      openCart
    }}>
      {children}
    </CartContext.Provider>
  );
};