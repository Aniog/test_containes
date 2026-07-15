import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, variant = null, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, qty: i.qty + qty }
            : i
        );
      }
      return [...prev, { ...product, variant, qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === productId && i.variant === variant))
    );
  }, []);

  const updateQty = useCallback((productId, variant, qty) => {
    if (qty <= 0) {
      setItems((prev) =>
        prev.filter((i) => !(i.id === productId && i.variant === variant))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === productId && i.variant === variant ? { ...i, qty } : i
      )
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQty,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
