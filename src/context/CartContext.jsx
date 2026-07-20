import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, quantity = 1, tone = 'gold') => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.tone === tone
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, tone) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)));
  }, []);

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.tone === tone ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
