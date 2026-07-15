import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const readStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStorage = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + qty } : it,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone: product.tone,
          query: product.query,
          alt: product.alt,
          qty,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((it) => it.id !== id);
      return prev.map((it) => (it.id === id ? { ...it, qty } : it));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.qty, 0);
    const subtotal = items.reduce((sum, it) => sum + it.qty * it.price, 0);
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      ...totals,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, isOpen, totals, addItem, removeItem, updateQty, clearCart, openCart, closeCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
