import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { findProduct } from "@/data/products";

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
    // Ignore storage failures (private mode, quota).
  }
}

function makeLineId(productId, tone, size) {
  return `${productId}__${tone || "default"}__${size || "default"}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(({ productId, tone, size, quantity = 1 }) => {
    const product = findProduct(productId);
    if (!product) return;
    setItems((current) => {
      const lineId = makeLineId(productId, tone, size);
      const existing = current.find((line) => line.id === lineId);
      if (existing) {
        return current.map((line) =>
          line.id === lineId ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [
        ...current,
        {
          id: lineId,
          productId,
          name: product.name,
          price: product.price,
          tone: tone || product.tone || "gold",
          size: size || "One Size",
          image: product.images?.[0] || null,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((line) => line.id !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((line) => line.id !== lineId);
      return current.map((line) =>
        line.id === lineId ? { ...line, quantity } : line
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, line) => sum + line.price * line.quantity, 0);
    const count = items.reduce((sum, line) => sum + line.quantity, 0);
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 6;
    const total = subtotal + shipping;
    return { subtotal, count, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      isOpen,
      summary,
    }),
    [items, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart, toggleCart, isOpen, summary]
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
