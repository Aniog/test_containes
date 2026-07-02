import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Could not parse cart", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );
      
      if (existingItemIndex >= 0) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity, variant }];
      }
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setItems((prev) => prev.filter((item) => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotalCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      isOpen, 
      setIsOpen,
      cartTotalCount,
      cartSubtotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
