import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

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
    /* ignore quota errors */
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage);
  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, options = {}) => {
    const variant = options.variant || "gold";
    const quantity = options.quantity || 1;
    setItems((prev) => {
      const key = `${product.id}__${variant}`;
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + quantity } : it,
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageQuery: product.imageQuery,
        },
      ];
    });
    setLastAdded({ id: product.id, name: product.name, variant, at: Date.now() });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((it) => it.key !== key);
      return prev.map((it) => (it.key === key ? { ...it, quantity } : it));
    });
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 8;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      lastAdded,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      summary,
    }),
    [items, isOpen, lastAdded, openCart, closeCart, toggleCart, addItem, updateQuantity, removeItem, clear, summary],
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
