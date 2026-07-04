import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

function readInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.id === "string" &&
        typeof line.productId === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0
    );
  } catch (err) {
    console.warn("[velmora] Could not read cart from localStorage", err);
    return [];
  }
}

function makeLineId(productId, colorId) {
  return `${productId}__${colorId || "default"}`;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.warn("[velmora] Could not persist cart to localStorage", err);
    }
  }, [items]);

  const addToCart = useCallback(({ product, colorId, quantity = 1 }) => {
    if (!product || !product.id) return;
    const lineId = makeLineId(product.id, colorId);
    setItems((current) => {
      const existing = current.find((line) => line.id === lineId);
      if (existing) {
        return current.map((line) =>
          line.id === lineId
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [
        ...current,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          colorId: colorId || (product.colors && product.colors[0]?.id) || "gold",
          colorLabel:
            (product.colors || []).find((c) => c.id === colorId)?.label ||
            (product.colors && product.colors[0]?.label) ||
            "Gold",
          image: product.images?.[0] || null,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((lineId) => {
    setItems((current) => current.filter((line) => line.id !== lineId));
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((line) => line.id !== lineId);
      }
      return current.map((line) =>
        line.id === lineId ? { ...line, quantity } : line
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const count = items.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = items.reduce(
      (sum, line) => sum + line.quantity * line.price,
      0
    );
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totals,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, isOpen, totals, addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart]
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
