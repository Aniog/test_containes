import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

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
    /* ignore */
  }
};

const lineKey = (productId, variantId) => `${productId}__${variantId}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, variant, qty = 1) => {
    setItems((prev) => {
      const key = lineKey(product.id, variant?.id ?? "default");
      const existing = prev.find((it) => it.key === key);
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, qty: it.qty + qty } : it
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          variantId: variant?.id ?? "default",
          variantLabel: variant?.label ?? "",
          qty,
        },
      ];
    });
    setJustAdded(product.id);
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((it) => it.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((it) => it.key !== key);
      return prev.map((it) => (it.key === key ? { ...it, qty } : it));
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.qty, 0);
    const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 8;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      justAdded,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      totals,
    }),
    [items, isOpen, justAdded, openCart, closeCart, toggleCart, addItem, removeItem, updateQty, clearCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
