import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = (product) => {
    setItems(current => {
      const existing = current.find(item => item.id === product.id && item.variant === product.variant);
      if (existing) {
        return current.map(item => 
          (item.id === product.id && item.variant === product.variant) 
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...current, product];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (id, variant) => {
    setItems(current => current.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant);
      return;
    }
    setItems(current => current.map(item => 
      (item.id === id && item.variant === variant) 
        ? { ...item, quantity }
        : item
    ));
  };

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      cartTotal, 
      cartCount,
      isDrawerOpen,
      setIsDrawerOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
