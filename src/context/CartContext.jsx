import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { formatPrice } from "@/lib/utils";
import { products as seedProducts } from "@/data/products";

const CartContext = createContext(null);

const FREE_SHIPPING_THRESHOLD = 80;
const STANDARD_SHIPPING = 8;
const STORAGE_KEY = "velmora.cart.v1";

function readInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (it) =>
        it &&
        typeof it.id === "string" &&
        typeof it.tone === "string" &&
        typeof it.qty === "number" &&
        it.qty > 0
    );
  } catch {
    return [];
  }
}

function persist(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage may be unavailable; ignore */
  }
}

function lineKey(productId, tone) {
  return `${productId}::${tone}`;
}

function findProduct(productId) {
  return seedProducts.find((p) => p.id === productId) || null;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    (productId, tone = "gold", qty = 1) => {
      const product = findProduct(productId);
      if (!product) return null;
      const validTone = product.toneOptions.includes(tone) ? tone : product.toneOptions[0];
      const key = lineKey(productId, validTone);
      let added = null;
      setItems((prev) => {
        const existing = prev.find((it) => lineKey(it.id, it.tone) === key);
        if (existing) {
          added = { ...existing, qty: existing.qty + qty };
          const next = prev.map((it) =>
            lineKey(it.id, it.tone) === key ? added : it
          );
          persist(next);
          return next;
        }
        added = {
          id: productId,
          name: product.name,
          price: product.price,
          tone: validTone,
          qty,
          imageQuery: product.images[0]?.query || product.name,
        };
        const next = [...prev, added];
        persist(next);
        return next;
      });
      setJustAdded({ id: productId, name: product.name, tone: validTone });
      setIsOpen(true);
      return added;
    },
    []
  );

  const updateQuantity = useCallback((productId, tone, qty) => {
    setItems((prev) => {
      const safeQty = Math.max(1, Math.floor(qty));
      const next = prev.map((it) =>
        it.id === productId && it.tone === tone
          ? { ...it, qty: safeQty }
          : it
      );
      persist(next);
      return next;
    });
  }, []);

  const removeItem = useCallback((productId, tone) => {
    setItems((prev) => {
      const next = prev.filter(
        (it) => !(it.id === productId && it.tone === tone)
      );
      persist(next);
      return next;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    persist([]);
  }, []);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const count = items.reduce((sum, it) => sum + it.qty, 0);
    const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : STANDARD_SHIPPING;
    const total = subtotal + shipping;
    const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    return {
      subtotal,
      count,
      shipping,
      total,
      remainingForFree,
      freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
      formattedSubtotal: formatPrice(subtotal),
      formattedShipping: shipping === 0 ? "Free" : formatPrice(shipping),
      formattedTotal: formatPrice(total),
    };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isOpen,
      justAdded,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [items, summary, isOpen, justAdded, openCart, closeCart, toggleCart, addItem, updateQuantity, removeItem, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}

export { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING };