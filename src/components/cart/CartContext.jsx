import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product, quantity = 1, tone = 'gold') => {
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
    openCart();
  };

  const removeFromCart = (productId, tone) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.id === productId && item.tone === tone ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      isCartOpen,
      toggleCart,
      openCart,
      closeCart,
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};