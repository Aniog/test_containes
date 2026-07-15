import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (i) => i.id === item.id && i.variant === item.variant
      );
      
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      
      return [...currentItems, item];
    });
    setIsOpen(true);
  };

  const removeItem = (id, variant) => {
    setItems((currentItems) =>
      currentItems.filter((i) => !(i.id === id && i.variant === variant))
    );
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant);
      return;
    }
    
    setItems((currentItems) =>
      currentItems.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    isOpen,
    setIsOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
