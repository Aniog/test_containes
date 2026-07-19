import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const readInitial = () => {
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
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full or unavailable — silently ignore */
    }
  }, [items]);

  const addItem = useCallback((product, { quantity = 1, tone = null } = {}) => {
    setItems((current) => {
      const variantKey = tone ? `${product.id}::${tone}` : product.id;
      const existing = current.find((i) => i.variantKey === variantKey);
      if (existing) {
        return current.map((i) =>
          i.variantKey === variantKey ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...current,
        {
          variantKey,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((variantKey) => {
    setItems((current) => current.filter((i) => i.variantKey !== variantKey));
  }, []);

  const updateQuantity = useCallback((variantKey, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((i) => i.variantKey !== variantKey);
      return current.map((i) =>
        i.variantKey === variantKey ? { ...i, quantity } : i
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const summary = useMemo(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return { itemCount, subtotal };
  }, [items]);

  const value = {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    summary,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside a CartProvider");
  return ctx;
}
