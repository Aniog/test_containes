import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, variant, qty = 1) => {
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
      const imageId = product.images?.[0]?.id || '';
      return [...prev, { ...product, variant, qty, imageId }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, variant) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.variant === variant)));
  }, []);

  const updateQty = useCallback((id, variant, qty) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => !(i.id === id && i.variant === variant)));
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.variant === variant ? { ...i, qty } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

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
        clearCart,
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
