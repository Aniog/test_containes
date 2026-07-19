import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = useCallback((product, variant = 'gold', quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.variant === variant);
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        displayName: product.displayName,
        price: product.price,
        variant,
        quantity,
        image: product.id,
      }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id, variant) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)));
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
