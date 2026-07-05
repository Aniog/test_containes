import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variant) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === productId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variant);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const value = {
    cartItems,
    isCartOpen,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    openCart
  };

  return (
    <CartContext.Provider value={value}>
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