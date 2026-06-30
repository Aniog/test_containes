import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1, tone = 'gold') => {
    setItems(current => {
      const existingItem = current.find(item => item.id === product.id && item.tone === tone);
      if (existingItem) {
        return current.map(item => 
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { ...product, quantity, tone }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, tone) => {
    setItems(current => current.filter(item => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(productId, tone);
      return;
    }
    setItems(current => 
      current.map(item => 
        item.id === productId && item.tone === tone
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      subtotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};