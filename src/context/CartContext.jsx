import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "velmora:cart:v1";

const CartContext = createContext(null);

const readStored = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, options = {}) => {
    const { quantity = 1, variant = null } = options;
    if (!product || !product.id) return;
    const lineKey = `${product.id}__${variant || "default"}`;
    setItems((current) => {
      const existing = current.find((i) => i.lineKey === lineKey);
      if (existing) {
        return current.map((i) =>
          i.lineKey === lineKey
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...current,
        {
          lineKey,
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          imgId: product.imgId,
          titleId: product.titleId,
          variant,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((lineKey, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((i) => i.lineKey !== lineKey);
      }
      return current.map((i) =>
        i.lineKey === lineKey ? { ...i, quantity } : i
      );
    });
  }, []);

  const removeItem = useCallback((lineKey) => {
    setItems((current) => current.filter((i) => i.lineKey !== lineKey));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    return { itemCount, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem, clear, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
