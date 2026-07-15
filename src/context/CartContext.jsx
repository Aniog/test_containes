import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = useCallback((product, variant = product.variants?.[0] || 'gold', quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, variant, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.variant === variant
          ? { ...i, quantity }
          : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
