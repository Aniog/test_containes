import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );
      
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      
      return [...prev, { ...product, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart(prev => prev.filter(
      item => !(item.id === id && item.variant === variant)
    ));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }
    
    setCart(prev => prev.map(item => 
      item.id === id && item.variant === variant 
        ? { ...item, quantity } 
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};