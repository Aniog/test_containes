import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant = 'Gold') => {
    const existing = cart.findIndex(item => item.id === product.id && item.variant === variant);
    
    if (existing !== -1) {
      const updated = [...cart];
      updated[existing].quantity += 1;
      setCart(updated);
    } else {
      setCart([...cart, { ...product, variant, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, variant) => {
    setCart(cart.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item => 
      item.id === id && item.variant === variant ? { ...item, quantity } : item
    ));
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};