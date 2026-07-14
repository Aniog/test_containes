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
    /* ignore */
  }
}

function lineKey(productId, variant) {
  return `${productId}::${variant || "default"}`;
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

  const addItem = useCallback((product, opts = {}) => {
    const variant = opts.variant || product.tone || "default";
    const key = lineKey(product.id, variant);
    setItems((current) => {
      const existing = current.find((it) => it.key === key);
      if (existing) {
        return current.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + (opts.quantity || 1) } : it
        );
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          image: product.image,
          quantity: opts.quantity || 1,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((it) => it.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((it) => it.key !== key);
      return current.map((it) =>
        it.key === key ? { ...it, quantity } : it
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = items.reduce(
      (sum, it) => sum + it.price * it.quantity,
      0
    );
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, summary, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart]
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
