import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1, options = {}) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id && JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...currentItems, { ...product, quantity, options }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, options = {}) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.id === productId && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const updateQuantity = (productId, options = {}, newQuantity) => {
    if (newQuantity < 1) return;
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === productId && JSON.stringify(item.options) === JSON.stringify(options)) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((total, item) => total + (item.price * item.quantity), 0), [items]);

  const value = {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
