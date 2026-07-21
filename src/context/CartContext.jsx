import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { productById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const lineKey = (productId, variantId) => `${productId}::${variantId || "default"}`;

const isBrowser = typeof window !== "undefined";

const readStorage = () => {
  if (!isBrowser) return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStorage = (lines) => {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // ignore storage errors
  }
};

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => readStorage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage(lines);
  }, [lines]);

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    setLines((current) => {
      const key = lineKey(productId, variantId);
      const existing = current.find((l) => l.key === key);
      if (existing) {
        return current.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...current, { key, productId, variantId, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setLines((current) =>
      current.filter((l) => l.key !== lineKey(productId, variantId))
    );
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    setLines((current) =>
      current
        .map((l) => {
          if (l.key !== lineKey(productId, variantId)) return l;
          return { ...l, quantity: Math.max(0, quantity) };
        })
        .filter((l) => l.quantity > 0)
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const detailedLines = useMemo(() => {
    return lines
      .map((line) => {
        const product = productById(line.productId);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === line.variantId);
        return {
          ...line,
          product,
          variant,
          lineTotal: product.price * line.quantity,
        };
      })
      .filter(Boolean);
  }, [lines]);

  const subtotal = useMemo(
    () => detailedLines.reduce((sum, l) => sum + l.lineTotal, 0),
    [detailedLines]
  );

  const itemCount = useMemo(
    () => detailedLines.reduce((sum, l) => sum + l.quantity, 0),
    [detailedLines]
  );

  const value = {
    lines: detailedLines,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    subtotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
