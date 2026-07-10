import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

const safeParse = (raw) => {
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return [];
    return safeParse(window.localStorage.getItem(STORAGE_KEY));
  });
  const [isOpen, setIsOpen] = useState(false);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* noop */
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((o) => !o), []);

  const addItem = useCallback((product, opts = {}) => {
    const qty = opts.quantity ?? 1;
    setItems((current) => {
      const idx = current.findIndex((it) => it.id === product.id);
      if (idx === -1) {
        return [
          ...current,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || "",
            category: product.category,
            quantity: qty,
          },
        ];
      }
      const next = [...current];
      next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
      return next;
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((it) => it.id !== id);
      return current.map((it) => (it.id === id ? { ...it, quantity } : it));
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((it) => it.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const count = items.reduce((s, it) => s + it.quantity, 0);
    const subtotal = items.reduce((s, it) => s + it.price * it.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 6;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = {
    items,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    summary,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
