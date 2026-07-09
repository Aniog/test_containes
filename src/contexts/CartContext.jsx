import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('velmora_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Could not parse cart data");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, quantity = 1, variant = 'Gold') => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { ...product, quantity, variant }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, variant) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(productId, variant);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}