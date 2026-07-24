import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { slugify } from "@/lib/utils";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

function readStorage() {
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

function writeStorage(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors
  }
}

// Build a stable line id from product + variant (tone).
export function buildLineId(productId, tone) {
  return `${productId}::${tone || "default"}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage());
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  // Persist on changes
  useEffect(() => {
    writeStorage(items);
  }, [items]);

  // Cross-tab sync
  useEffect(() => {
    function onStorage(e) {
      if (e.key === STORAGE_KEY) {
        try {
          const parsed = e.newValue ? JSON.parse(e.newValue) : [];
          if (Array.isArray(parsed)) setItems(parsed);
        } catch {
          // ignore
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback((product, opts = {}) => {
    const tone = opts.tone || product.tones?.[0] || "gold";
    const qty = Math.max(1, Number(opts.quantity) || 1);
    const lineId = buildLineId(product.id, tone);
    setItems((current) => {
      const idx = current.findIndex((i) => i.lineId === lineId);
      if (idx >= 0) {
        const next = [...current];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty };
        return next;
      }
      return [
        ...current,
        {
          lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity: qty,
          img1: product.img1,
          addedAt: Date.now(),
        },
      ];
    });
    setLastAdded({ lineId, name: product.name, tone });
    setIsOpen(true);
    return lineId;
  }, []);

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    const q = Math.max(1, Math.min(99, Math.floor(Number(quantity) || 1)));
    setItems((current) =>
      current.map((i) => (i.lineId === lineId ? { ...i, quantity: q } : i)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0,
    );
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 6;
    const total = subtotal + shipping;
    return { subtotal, shipping, total, count };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isOpen,
      lastAdded,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      openCart,
      closeCart,
    }),
    [items, summary, isOpen, lastAdded, addItem, removeItem, updateQuantity, clear, openCart, closeCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

// Utility for tests / dev tools
export { slugify };
