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
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.id === product.id && item.tone === tone
      );
      if (existingItemIndex > -1) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, tone) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
