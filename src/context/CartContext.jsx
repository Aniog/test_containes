import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

function readInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function makeLineKey(productId, tone) {
  return `${productId}::${tone || "default"}`;
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch (e) {
      // ignore
    }
  }, [lines]);

  const addToCart = useCallback((productId, opts = {}) => {
    const tone = opts.tone || "gold";
    const quantity = Math.max(1, Number(opts.quantity) || 1);
    const key = makeLineKey(productId, tone);
    setLines((current) => {
      const idx = current.findIndex((l) => l.key === key);
      if (idx === -1) {
        return [...current, { key, productId, tone, quantity }];
      }
      const next = [...current];
      next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
      return next;
    });
    setIsOpen(true);
  }, []);

  const removeLine = useCallback((key) => {
    setLines((current) => current.filter((l) => l.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    const q = Math.max(1, Number(quantity) || 1);
    setLines((current) =>
      current.map((l) => (l.key === key ? { ...l, quantity: q } : l))
    );
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const openCart  = useCallback(() => setIsOpen(true),  []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const enrichedLines = useMemo(() => {
    return lines.map((l) => {
      const product = getProduct(l.productId);
      return { ...l, product };
    });
  }, [lines]);

  const subtotal = useMemo(() => {
    return enrichedLines.reduce((sum, l) => {
      if (!l.product) return sum;
      return sum + l.product.price * l.quantity;
    }, 0);
  }, [enrichedLines]);

  const itemCount = useMemo(
    () => enrichedLines.reduce((n, l) => n + l.quantity, 0),
    [enrichedLines]
  );

  const value = useMemo(
    () => ({
      lines: enrichedLines,
      rawLines: lines,
      addToCart,
      removeLine,
      updateQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
      subtotal,
      itemCount,
    }),
    [enrichedLines, lines, addToCart, removeLine, updateQuantity, clearCart, isOpen, openCart, closeCart, subtotal, itemCount]
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
