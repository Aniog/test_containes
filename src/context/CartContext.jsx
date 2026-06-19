import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/data/products";

const STORAGE_KEY = "velmora-cart-v1";

const CartContext = createContext(null);

function readStored() {
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

function writeStored(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage may be unavailable in private mode — silently ignore.
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStored(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  // Cart line keys are (productId + variantId) so the same product in different
  // finishes is treated as a separate line.
  const lineKey = (productId, variantId) => `${productId}::${variantId}`;

  const addItem = useCallback(
    ({ productId, variantId, quantity = 1 }) => {
      const product = getProduct(productId);
      if (!product) return;
      const variant =
        product.variants.find((v) => v.id === variantId) || product.variants[0];
      const key = lineKey(productId, variant.id);
      setItems((current) => {
        const idx = current.findIndex((line) => line.key === key);
        if (idx >= 0) {
          const next = [...current];
          next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
          return next;
        }
        return [
          ...current,
          {
            key,
            productId,
            variantId: variant.id,
            quantity,
            price: product.price,
            name: product.name,
            image: product.images[0],
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key));
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((line) => line.key !== key));
      return;
    }
    setItems((current) =>
      current.map((line) =>
        line.key === key ? { ...line, quantity: Math.min(99, quantity) } : line
      )
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = items.reduce(
      (sum, line) => sum + line.price * line.quantity,
      0
    );
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      setQuantity,
      clear,
    };
  }, [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}