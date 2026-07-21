import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

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

const lineKey = (productId, variantId) => `${productId}::${variantId || "default"}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage);
  const [isOpen, setIsOpen] = useState(false);
  const [bumpKey, setBumpKey] = useState(0);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, variantId = null, qty = 1) => {
    const key = lineKey(product.id, variantId);
    setItems((prev) => {
      const existing = prev.find((line) => line.key === key);
      if (existing) {
        return prev.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          variantId,
          name: product.name,
          price: product.price,
          image: product.imgId,
          qty,
        },
      ];
    });
    setBumpKey((n) => n + 1);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((line) => line.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((line) => (line.key === key ? { ...line, qty } : line)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((acc, l) => acc + l.qty, 0);
    const subtotal = items.reduce((acc, l) => acc + l.qty * l.price, 0);
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totals,
      isOpen,
      bumpKey,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQty,
      clear,
    }),
    [items, totals, isOpen, bumpKey, openCart, closeCart, toggleCart, addItem, removeItem, updateQty, clear]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
