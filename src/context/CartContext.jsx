import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen(prev => !prev), []);

  const addToCart = useCallback((product, quantity = 1, variant = null) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const newCart = [...prevCart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + quantity
        };
        return newCart;
      }

      return [...prevCart, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
        variant: variant,
        quantity: quantity
      }];
    });
  }, []);

  const removeFromCart = useCallback((id, variant = null) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.id === id && item.variant === variant)
    ));
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }

    setCart(prevCart => prevCart.map(item => {
      if (item.id === id && item.variant === variant) {
        return { ...item, quantity };
      }
      return item;
    }));
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const getCartCount = useCallback(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const value = {
    cart,
    isCartOpen,
    isLoading,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
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

export default CartContext;
