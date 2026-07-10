import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora_cart_v1";

const readStored = () => {
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

const writeStored = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore storage errors
  }
};

const makeLineId = (id, tone) => `${id}__${(tone || "gold").toLowerCase()}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStored(items);
  }, [items]);

  const addToCart = useCallback((product, opts = {}) => {
    const tone = opts.tone || "gold";
    const qty = opts.qty || 1;
    const lineId = makeLineId(product.id, tone);
    setItems((current) => {
      const existing = current.find((it) => it.lineId === lineId);
      if (existing) {
        return current.map((it) =>
          it.lineId === lineId ? { ...it, qty: it.qty + qty } : it
        );
      }
      return [
        ...current,
        {
          lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          tone,
          qty,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((lineId, qty) => {
    setItems((current) => {
      if (qty <= 0) return current.filter((it) => it.lineId !== lineId);
      return current.map((it) =>
        it.lineId === lineId ? { ...it, qty: Math.min(99, qty) } : it
      );
    });
  }, []);

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((it) => it.lineId !== lineId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const totals = useMemo(() => {
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = items.reduce((acc, it) => acc + it.qty * it.price, 0);
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      updateQty,
      removeItem,
      clearCart,
      count: totals.count,
      subtotal: totals.subtotal,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addToCart, updateQty, removeItem, clearCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
