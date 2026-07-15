import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1, variant = 'Gold') => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id && item.variant === variant);
      if (existingItem) {
        return currentItems.map(item => 
          (item.id === product.id && item.variant === variant)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...currentItems, { ...product, quantity, variant }];
    });
    setIsOpen(true); // Open drawer on add
  };

  const removeItem = (productId, variant) => {
    setItems(currentItems => currentItems.filter(item => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }
    setItems(currentItems => 
      currentItems.map(item => 
        (item.id === productId && item.variant === variant)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleCart = () => setIsOpen(prev => !prev);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalItems = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((total, item) => total + (item.price * item.quantity), 0), [items]);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    isOpen,
    toggleCart,
    openCart,
    closeCart,
    totalItems,
    subtotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};