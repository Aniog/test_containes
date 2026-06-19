import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "./products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

function readStored() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) => item && typeof item.id === "string" && typeof item.qty === "number"
    );
  } catch {
    return [];
  }
}

function writeStored(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage full / unavailable — fail silently */
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    writeStored(items);
  }, [items]);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const addItem = useCallback((productId, qty = 1, variant = null) => {
    if (!getProductById(productId)) return;
    setItems((current) => {
      const idx = current.findIndex(
        (item) => item.id === productId && (item.variant || null) === (variant || null)
      );
      if (idx >= 0) {
        const next = [...current];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...current, { id: productId, qty, variant: variant || null }];
    });
    setLastAdded({ id: productId, ts: Date.now() });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((productId, qty, variant = null) => {
    setItems((current) => {
      if (qty <= 0) {
        return current.filter(
          (item) => !(item.id === productId && (item.variant || null) === (variant || null))
        );
      }
      return current.map((item) =>
        item.id === productId && (item.variant || null) === (variant || null)
          ? { ...item, qty }
          : item
      );
    });
  }, []);

  const removeItem = useCallback((productId, variant = null) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.id === productId && (item.variant || null) === (variant || null))
      )
    );
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const summary = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const item of items) {
      const product = getProductById(item.id);
      if (!product) continue;
      count += item.qty;
      subtotal += product.price * item.qty;
    }
    const shipping = subtotal > 0 ? 0 : 0; // always free for now
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQty,
      removeItem,
      clear,
      summary,
      lastAdded,
    }),
    [items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clear, summary, lastAdded]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
