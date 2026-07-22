import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'velmora-cart-v1';

function loadInitialCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in memory
    }
  }, [items]);

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}__${variant}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          variant,
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, delta) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.key === key ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i
        )
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        count: acc.count + i.quantity,
        subtotal: acc.subtotal + i.price * i.quantity,
      }),
      { count: 0, subtotal: 0 }
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, count, subtotal, isCartOpen, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
