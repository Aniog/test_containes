import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora_cart_v1";

const readInitial = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage failures
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, qty = 1, tone = null) => {
    setItems((prev) => {
      const key = `${product.id}__${tone || product.tone || "default"}`;
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + qty } : it
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone: tone || product.tone || "gold",
          category: product.category,
          thumbId: product.thumbId || product.id,
          quantity: qty,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const updateQuantity = useCallback((key, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((it) => it.key !== key);
      return prev.map((it) => (it.key === key ? { ...it, quantity: qty } : it));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((acc, it) => acc + it.quantity, 0);
    const subtotal = items.reduce((acc, it) => acc + it.quantity * it.price, 0);
    return { count, subtotal };
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
      totals,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
