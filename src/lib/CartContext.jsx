import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, tone = 'Gold', quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.tone === tone);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, tone, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId, tone) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
