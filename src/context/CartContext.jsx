import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart-v1";

function readStorage() {
  if (typeof window === "undefined") return { items: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.items)) return parsed;
    return { items: [] };
  } catch {
    return { items: [] };
  }
}

function writeStorage(state) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function lineKey(productId, variant) {
  return `${productId}::${variant || "default"}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage().items);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage({ items });
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, options = {}) => {
    const { variant = product.variants?.[0] || "18K Gold", quantity = 1 } = options;
    setItems((current) => {
      const key = lineKey(product.id, variant);
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + quantity } : line,
        );
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images?.[0],
          titleId: product.titleId,
          descId: product.descId,
          slug: product.id,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((line) => (line.key === key ? { ...line, quantity: Math.max(0, quantity) } : line))
        .filter((line) => line.quantity > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = items.reduce((sum, l) => sum + l.quantity * l.price, 0);
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({ items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clear, ...totals }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clear, totals],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatPrice(amount) {
  return `$${Number(amount).toFixed(2)}`;
}
