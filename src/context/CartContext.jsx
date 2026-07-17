import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

function readStored() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function writeStored(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);
  const [justAddedId, setJustAddedId] = useState(null);

  useEffect(() => {
    writeStored(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    (product, opts = {}) => {
      const qty = opts.qty ?? 1;
      const tone = opts.tone ?? product.tone ?? "gold";
      const variantKey = `${product.id}__${tone}`;

      setItems((prev) => {
        const existing = prev.find((it) => it.variantKey === variantKey);
        if (existing) {
          return prev.map((it) =>
            it.variantKey === variantKey ? { ...it, qty: it.qty + qty } : it
          );
        }
        return [
          ...prev,
          {
            variantKey,
            id: product.id,
            name: product.name,
            price: product.price,
            tone,
            qty,
            imgId: product.imgIds?.primary,
            imgIds: product.imgIds,
          },
        ];
      });

      setJustAddedId(variantKey);
      window.setTimeout(() => setJustAddedId(null), 1600);
      if (opts.openDrawer !== false) setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((variantKey) => {
    setItems((prev) => prev.filter((it) => it.variantKey !== variantKey));
  }, []);

  const updateQty = useCallback((variantKey, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((it) => it.variantKey !== variantKey);
      return prev.map((it) =>
        it.variantKey === variantKey ? { ...it, qty } : it
      );
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = items.reduce((acc, it) => acc + it.qty * it.price, 0);
    const shipping = subtotal > 80 || subtotal === 0 ? 0 : 8;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQty,
      clear,
      summary,
      justAddedId,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQty, clear, summary, justAddedId]
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
