import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { productById } from "@/data/products";

const STORAGE_KEY = "velmora_cart_v1";

const CartContext = createContext(null);

const loadInitial = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.productId === "string" &&
        typeof item.variantId === "string" &&
        Number.isFinite(item.quantity) &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === productId && i.variantId === variantId
      );
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { productId, variantId, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter(
          (i) => !(i.productId === productId && i.variantId === variantId)
        );
      }
      return prev.map((i) =>
        i.productId === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i
      );
    });
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId)
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const decorated = useMemo(() => {
    return items
      .map((item) => {
        const product = productById(item.productId);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === item.variantId);
        return {
          ...item,
          product,
          variant: variant || product.variants[0],
          lineTotal: product.price * item.quantity,
        };
      })
      .filter(Boolean);
  }, [items]);

  const subtotal = useMemo(
    () => decorated.reduce((sum, i) => sum + i.lineTotal, 0),
    [decorated]
  );
  const itemCount = useMemo(
    () => decorated.reduce((sum, i) => sum + i.quantity, 0),
    [decorated]
  );
  const shipping = subtotal >= 80 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  const value = useMemo(
    () => ({
      items: decorated,
      rawItems: items,
      itemCount,
      subtotal,
      shipping,
      total,
      isOpen,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
    }),
    [
      decorated,
      items,
      itemCount,
      subtotal,
      shipping,
      total,
      isOpen,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
    ]
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
