import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = useCallback((message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  }, []);

  const addToCart = useCallback((product, variant = 'gold', quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          variant,
          quantity,
        },
      ];
    });
    showToast(`${product.name} added to cart`);
    setIsCartOpen(true);
  }, [showToast]);

  const removeFromCart = useCallback((id, variant) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), []);

  const value = {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    toast,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};