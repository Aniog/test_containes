import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product, quantity = 1, variant = null) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setCartItems(prev => {
        const existingIndex = prev.findIndex(
          item => item.id === product.id && item.variant === variant
        );

        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          setIsLoading(false);
          return updated;
        }

        setIsLoading(false);
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            variant,
            quantity,
          },
        ];
      });
      
      setIsCartOpen(true);
    }, 300);
  }, []);

  const removeFromCart = useCallback((itemId, variant) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  }, []);

  const updateQuantity = useCallback((itemId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, variant);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);

  const value = {
    cartItems,
    isCartOpen,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    openCart,
    closeCart,
    toggleCart,
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
