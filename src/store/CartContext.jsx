import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

const readStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const writeStorage = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // Ignore quota errors silently.
  }
};

const makeLineId = (productId, variant) => `${productId}__${variant || "default"}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, opts = {}) => {
    const { quantity = 1, variant } = opts;
    const lineId = makeLineId(product.id, variant);
    setItems((current) => {
      const existing = current.find((i) => i.lineId === lineId);
      if (existing) {
        return current.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...current,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          tone: product.tone,
          variant: variant || null,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((i) => i.lineId !== lineId);
      }
      return current.map((i) => (i.lineId === lineId ? { ...i, quantity } : i));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
    return { itemCount, subtotal };
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
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
