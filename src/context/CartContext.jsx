import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addToCart = useCallback((product, quantity = 1, tone = 'gold') => {
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
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, tone) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.tone === tone)),
    );
  }, []);

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, addToCart, removeFromCart, updateQuantity, clearCart, totals],
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
