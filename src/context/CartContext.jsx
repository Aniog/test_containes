import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, { tone = null, quantity = 1 } = {}) => {
    const lineKey = `${product.id}__${tone || "default"}`;
    setItems((current) => {
      const existing = current.find((item) => item.key === lineKey);
      if (existing) {
        return current.map((item) =>
          item.key === lineKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          key: lineKey,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          subtitle: product.subtitle,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key));
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity } : item
      )
    );
  }, []);

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
