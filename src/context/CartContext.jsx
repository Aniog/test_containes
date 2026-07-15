import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("velmora-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("velmora-cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, options = {}) => {
    const { tone = product.tone[0] || "gold", quantity = 1 } = options;
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.tone === tone
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, tone) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)));
  }, []);

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      removeItem(id, tone);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.tone === tone ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, addItem, removeItem, updateQuantity, clearCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
