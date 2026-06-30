import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = (product, variant, quantity = 1) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.variant === variant);
      
      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      
      return [...prev, { ...product, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) return;
    setCartItems(prev => prev.map(item => 
      (item.id === productId && item.variant === variant) 
        ? { ...item, quantity } 
        : item
    ));
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
