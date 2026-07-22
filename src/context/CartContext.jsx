import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora_cart_v1";

function readStoredCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  // items: [{ id, variant, qty }]
  const [items, setItems] = useState(readStoredCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const addItem = useCallback((id, variant = "Gold", qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === id && i.variant === variant);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { id, variant, qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.variant === variant)),
    );
  }, []);

  const updateQty = useCallback((id, variant, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.id === id && i.variant === variant))
        : prev.map((i) =>
            i.id === id && i.variant === variant ? { ...i, qty } : i,
          ),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const detailed = useMemo(
    () =>
      items
        .map((i) => ({ ...i, product: getProduct(i.id) }))
        .filter((i) => i.product),
    [items],
  );

  const count = useMemo(
    () => detailed.reduce((sum, i) => sum + i.qty, 0),
    [detailed],
  );

  const subtotal = useMemo(
    () => detailed.reduce((sum, i) => sum + i.qty * i.product.price, 0),
    [detailed],
  );

  const value = useMemo(
    () => ({
      items: detailed,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      detailed,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
