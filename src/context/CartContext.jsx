import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((productId, options = {}) => {
    const { quantity = 1, tone = "gold" } = options;
    setItems((current) => {
      const lineKey = `${productId}::${tone}`;
      const existing = current.find((i) => i.lineKey === lineKey);
      if (existing) {
        return current.map((i) =>
          i.lineKey === lineKey ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      const product = getProductById(productId);
      return [
        ...current,
        {
          lineKey,
          productId,
          name: product?.name,
          price: product?.price,
          imageKey: product?.imageKey,
          tone,
          quantity,
        },
      ];
    });
    setToast({ id: Date.now(), name: getProductById(productId)?.name });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((lineKey, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((i) => i.lineKey !== lineKey);
      return current.map((i) => (i.lineKey === lineKey ? { ...i, quantity } : i));
    });
  }, []);

  const removeItem = useCallback((lineKey) => {
    setItems((current) => current.filter((i) => i.lineKey !== lineKey));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const dismissToast = useCallback(() => setToast(null), []);

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      toast,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      dismissToast,
    }),
    [items, count, subtotal, isOpen, toast, openCart, closeCart, addItem, updateQuantity, removeItem, clearCart, dismissToast]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
