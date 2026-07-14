import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCT_BY_ID } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function readStoredCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.variantId === "string" &&
        Number.isFinite(item.qty) &&
        item.qty > 0
    );
  } catch {
    return [];
  }
}

function writeStoredCart(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStoredCart());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStoredCart(items);
  }, [items]);

  const addItem = useCallback((productId, variantId, qty = 1) => {
    setItems((current) => {
      const idx = current.findIndex(
        (i) => i.id === productId && i.variantId === variantId
      );
      if (idx >= 0) {
        const next = [...current];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...current, { id: productId, variantId, qty }];
    });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((productId, variantId, qty) => {
    setItems((current) => {
      if (qty <= 0) {
        return current.filter(
          (i) => !(i.id === productId && i.variantId === variantId)
        );
      }
      return current.map((i) =>
        i.id === productId && i.variantId === variantId ? { ...i, qty } : i
      );
    });
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setItems((current) =>
      current.filter(
        (i) => !(i.id === productId && i.variantId === variantId)
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const enriched = useMemo(
    () =>
      items
        .map((item) => {
          const product = PRODUCT_BY_ID[item.id];
          if (!product) return null;
          const variantLabel =
            item.variantId === "silver" ? "Sterling Silver" : "18K Gold Plated";
          return {
            ...item,
            product,
            variantLabel,
            lineTotal: product.price * item.qty,
          };
        })
        .filter(Boolean),
    [items]
  );

  const subtotal = useMemo(
    () => enriched.reduce((sum, i) => sum + i.lineTotal, 0),
    [enriched]
  );
  const itemCount = useMemo(
    () => enriched.reduce((sum, i) => sum + i.qty, 0),
    [enriched]
  );

  const value = {
    items: enriched,
    rawItems: items,
    isOpen,
    openCart,
    closeCart,
    addItem,
    updateQty,
    removeItem,
    clear,
    subtotal,
    itemCount,
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
