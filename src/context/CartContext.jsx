import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.variant === variant
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }

      return [...prev, { product, quantity, variant }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variant) => {
    setCartItems(prev => 
      prev.filter(item => !(item.product.id === productId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variant);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 
    0
  );

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal
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
