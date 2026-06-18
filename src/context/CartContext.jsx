import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

function loadInitial() {
  if (typeof window === "undefined") return [];
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
  const [items, setItems] = useState(loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items]);

  const addItem = useCallback((product, opts = {}) => {
    const variant = opts.variant || product.variants?.[0] || "Gold";
    const quantity = opts.quantity || 1;
    const lineKey = `${product.id}::${variant}`;
    setItems((current) => {
      const existing = current.find((item) => item.lineKey === lineKey);
      if (existing) {
        return current.map((item) =>
          item.lineKey === lineKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          lineKey,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgIds?.main,
          titleId: product.titleId,
          descId: product.descId,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineKey) => {
    setItems((current) => current.filter((item) => item.lineKey !== lineKey));
  }, []);

  const updateQuantity = useCallback((lineKey, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.lineKey === lineKey
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = {
    items,
    isOpen,
    subtotal,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
