import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function readInitial() {
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

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  const persist = useCallback((next) => {
    setItems(next);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore quota errors */
      }
    }
  }, []);

  const addItem = useCallback(
    (product, { variant = null, quantity = 1 } = {}) => {
      const lineId = `${product.id}::${variant || "default"}`;
      const existing = items.find((i) => i.lineId === lineId);
      let next;
      if (existing) {
        next = items.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i,
        );
      } else {
        next = [
          ...items,
          {
            lineId,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || null,
            variant,
            quantity,
          },
        ];
      }
      persist(next);
      setIsOpen(true);
    },
    [items, persist],
  );

  const removeItem = useCallback(
    (lineId) => {
      persist(items.filter((i) => i.lineId !== lineId));
    },
    [items, persist],
  );

  const setQuantity = useCallback(
    (lineId, quantity) => {
      if (quantity <= 0) {
        persist(items.filter((i) => i.lineId !== lineId));
        return;
      }
      persist(items.map((i) => (i.lineId === lineId ? { ...i, quantity } : i)));
    },
    [items, persist],
  );

  const clear = useCallback(() => {
    persist([]);
  }, [persist]);

  const value = useMemo(() => {
    const itemCount = items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = items.reduce((n, i) => n + i.quantity * i.price, 0);
    return {
      items,
      itemCount,
      subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      addItem,
      removeItem,
      setQuantity,
      clear,
    };
  }, [items, isOpen, addItem, removeItem, setQuantity, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
