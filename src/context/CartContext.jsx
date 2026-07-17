import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCart(prev => {
      const existing = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );
      
      if (existing !== -1) {
        const updated = [...prev];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + quantity,
        };
        return updated;
      }
      
      return [...prev, { ...product, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: newQuantity };
      return updated;
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
};