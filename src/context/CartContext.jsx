import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

const CART_KEY = 'velmora_cart';

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  const addItem = (product, quantity = 1, tone = 'gold') => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.tone === tone,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, tone) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.tone === tone)),
    );
  };

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeItem(productId, tone);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    subtotal: totals.subtotal,
    count: totals.count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
