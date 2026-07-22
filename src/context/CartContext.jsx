import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

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
    // ignore
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const addItem = useCallback((product, options = {}) => {
    const { quantity = 1, tone = null } = options;
    setItems((prev) => {
      const key = tone ? `${product.id}__${tone}` : product.id;
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + quantity } : it
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          query: product.query,
          titleId: product.titleId,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((prev) =>
      prev
        .map((it) => (it.key === key ? { ...it, quantity: Math.max(0, quantity) } : it))
        .filter((it) => it.quantity > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    const count = items.reduce((sum, it) => sum + it.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 80 ? 0 : 8;
    const total = subtotal + shipping;
    return { subtotal, count, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      openCart,
      closeCart,
    }),
    [items, summary, isOpen, addItem, removeItem, updateQuantity, clear, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
