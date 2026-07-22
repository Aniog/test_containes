import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { PRODUCTS } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

const initialState = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((line) => line && typeof line.id === "string")
      .map((line) => {
        const product = findProduct(line.id);
        if (!product) return null;
        return {
          id: line.id,
          qty: Math.max(1, Number(line.qty) || 1),
          tone: typeof line.tone === "string" ? line.tone : product.tone?.[0] || "gold",
        };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors silently
    }
  }, [items]);

  const addItem = useCallback((id, opts = {}) => {
    if (!findProduct(id)) return;
    setItems((prev) => {
      const tone = opts.tone || prev.find((i) => i.id === id)?.tone || "gold";
      const existing = prev.find((i) => i.id === id && i.tone === tone);
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, qty: i.qty + (opts.qty || 1) } : i,
        );
      }
      return [...prev, { id, qty: opts.qty || 1, tone }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, tone) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)));
  }, []);

  const updateQty = useCallback((id, tone, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id && i.tone === tone ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const detailed = items
      .map((i) => {
        const product = findProduct(i.id);
        if (!product) return null;
        return { ...i, product, lineTotal: product.price * i.qty };
      })
      .filter(Boolean);
    const itemCount = detailed.reduce((acc, i) => acc + i.qty, 0);
    const subtotal = detailed.reduce((acc, i) => acc + i.lineTotal, 0);
    return {
      items: detailed,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQty,
      clear,
      isOpen,
      openCart,
      closeCart,
    };
  }, [items, isOpen, addItem, removeItem, updateQty, clear, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
