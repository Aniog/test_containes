import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProductById } from "@/data/catalog";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

function readInitial() {
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
        Number.isFinite(item.quantity) &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((productId, variantId = "gold", quantity = 1) => {
    setItems((current) => {
      const key = `${productId}__${variantId}`;
      const existing = current.find((i) => `${i.id}__${i.variantId}` === key);
      if (existing) {
        return current.map((i) =>
          `${i.id}__${i.variantId}` === key
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...current,
        {
          id: productId,
          variantId,
          quantity,
          addedAt: Date.now(),
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setItems((current) =>
      current.filter((i) => !(i.id === productId && i.variantId === variantId))
    );
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity <= 0) {
      setItems((current) =>
        current.filter((i) => !(i.id === productId && i.variantId === variantId))
      );
      return;
    }
    setItems((current) =>
      current.map((i) =>
        i.id === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const detailedItems = useMemo(() => {
    return items
      .map((i) => {
        const product = getProductById(i.id);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === i.variantId) || product.variants[0];
        return {
          ...i,
          product,
          variant,
          lineTotal: product.price * i.quantity,
        };
      })
      .filter(Boolean);
  }, [items]);

  const subtotal = useMemo(
    () => detailedItems.reduce((sum, i) => sum + i.lineTotal, 0),
    [detailedItems]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const value = {
    items: detailedItems,
    rawItems: items,
    itemCount,
    subtotal,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
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
