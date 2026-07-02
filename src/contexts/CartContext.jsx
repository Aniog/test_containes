import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = useCallback((product, tone = 'gold', quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.tone === tone
      );
      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          cartItemId: `${product.id}-${tone}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          imageQuery: product.images.primaryQuery,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((cartItemId) => {
    setItems((current) => current.filter((item) => item.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity < 1) {
      removeItem(cartItemId);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

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
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totals]
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
