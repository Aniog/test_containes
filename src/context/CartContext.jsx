import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log('CartProvider: Rendering, cart has', cartItems.length, 'items');

  const addToCart = useCallback((product, quantity = 1, variant = 'Gold') => {
    console.log('CartContext: Adding to cart:', product.name, 'quantity:', quantity, 'variant:', variant);
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.variant === variant);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, variant, addedAt: Date.now() }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    console.log('CartContext: Removing from cart, id:', id);
    setCartItems(prev => prev.filter(item => item.addedAt !== id));
  }, []);

  const updateQuantity = useCallback((id, newQuantity) => {
    console.log('CartContext: Updating quantity for id:', id, 'new quantity:', newQuantity);
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.addedAt === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    console.log('CartContext: Clearing cart');
    setCartItems([]);
  }, []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = item.price || 0;
      return total + (price * item.quantity);
    }, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
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
