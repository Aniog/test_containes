import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProductById } from "../data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const buildLineKey = (productId, variantId) => `${productId}::${variantId}`;

function readStoredCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.productId === "string" &&
        typeof line.variantId === "string" &&
        Number.isFinite(line.qty) &&
        line.qty > 0,
    );
  } catch {
    return [];
  }
}

function writeStoredCart(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota / privacy errors
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStoredCart());
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    writeStoredCart(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    ({ productId, variantId, qty = 1 }) => {
      if (!productId || !variantId) return;
      const product = getProductById(productId);
      if (!product) return;
      const variant = product.variants.find((v) => v.id === variantId);
      if (!variant) return;

      setItems((current) => {
        const key = buildLineKey(productId, variantId);
        const existing = current.find((l) => l.key === key);
        if (existing) {
          return current.map((l) =>
            l.key === key ? { ...l, qty: l.qty + qty } : l,
          );
        }
        return [
          ...current,
          {
            key,
            productId,
            variantId,
            qty,
            addedAt: Date.now(),
          },
        ];
      });

      setLastAdded({ productId, variantId, at: Date.now() });
      setIsOpen(true);
    },
    [],
  );

  const updateQty = useCallback((key, qty) => {
    setItems((current) => {
      if (qty <= 0) {
        return current.filter((l) => l.key !== key);
      }
      return current.map((l) =>
        l.key === key ? { ...l, qty: Math.min(qty, 99) } : l,
      );
    });
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((l) => l.key !== key));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(() => {
    const detailedLines = items
      .map((line) => {
        const product = getProductById(line.productId);
        if (!product) return null;
        const variant = product.variants.find(
          (v) => v.id === line.variantId,
        );
        if (!variant) return null;
        return {
          ...line,
          product,
          variant,
          lineTotal: product.price * line.qty,
        };
      })
      .filter(Boolean);

    const count = detailedLines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = detailedLines.reduce(
      (sum, l) => sum + l.lineTotal,
      0,
    );

    return {
      items,
      detailedLines,
      count,
      subtotal,
      isOpen,
      lastAdded,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQty,
      removeItem,
      clearCart,
    };
  }, [items, isOpen, lastAdded, openCart, closeCart, toggleCart, addItem, updateQty, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return ctx;
}
