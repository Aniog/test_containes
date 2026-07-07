import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import { products, getProductById } from "@/data/products.js";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

const readStored = () => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.id === "string" &&
        typeof line.qty === "number" &&
        line.qty > 0
    );
  } catch {
    return [];
  }
};

const writeStored = (lines) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* ignore */
  }
};

export const CartProvider = ({ children }) => {
  const [lines, setLines] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    writeStored(lines);
  }, [lines]);

  // Listen to a custom event so any component (e.g. product card) can open the cart
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("velmora:open-cart", handler);
    return () => window.removeEventListener("velmora:open-cart", handler);
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    ({ id, qty = 1, variant = null }) => {
      if (!id) return;
      const product = getProductById(id);
      if (!product) return;
      setLines((current) => {
        const key = `${id}__${variant ?? "default"}`;
        const existing = current.find((l) => l.key === key);
        if (existing) {
          return current.map((l) =>
            l.key === key ? { ...l, qty: l.qty + qty } : l
          );
        }
        return [
          ...current,
          {
            key,
            id,
            name: product.name,
            price: product.price,
            qty,
            variant,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const updateQty = useCallback((key, qty) => {
    setLines((current) => {
      if (qty <= 0) return current.filter((l) => l.key !== key);
      return current.map((l) => (l.key === key ? { ...l, qty } : l));
    });
  }, []);

  const removeItem = useCallback((key) => {
    setLines((current) => current.filter((l) => l.key !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const summary = useMemo(() => {
    const itemCount = lines.reduce((acc, l) => acc + l.qty, 0);
    const subtotal = lines.reduce((acc, l) => acc + l.qty * l.price, 0);
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;
    const total = subtotal + shipping;
    return { itemCount, subtotal, shipping, total };
  }, [lines]);

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQty,
      removeItem,
      clear,
      summary,
      products, // exposed so other components don't need a second import
    }),
    [lines, isOpen, openCart, closeCart, toggleCart, addItem, updateQty, removeItem, clear, summary]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider />");
  }
  return ctx;
};
