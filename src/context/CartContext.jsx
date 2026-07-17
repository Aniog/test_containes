import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

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

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = useCallback((productId, qty = 1, variant = null, imageId = null) => {
    setItems((current) => {
      const key = `${productId}::${variant ?? "default"}`;
      const existing = current.find((i) => i.key === key);
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [...current, { key, productId, qty, variant, imageId }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key));
  }, []);

  const updateQty = useCallback((key, qty) => {
    if (qty <= 0) {
      setItems((current) => current.filter((i) => i.key !== key));
      return;
    }
    setItems((current) =>
      current.map((i) => (i.key === key ? { ...i, qty } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const detailed = useMemo(
    () =>
      items
        .map((line) => {
          const product = products.find((p) => p.id === line.productId);
          if (!product) return null;
          return { ...line, product };
        })
        .filter(Boolean),
    [items],
  );

  const itemCount = useMemo(
    () => detailed.reduce((acc, line) => acc + line.qty, 0),
    [detailed],
  );

  const subtotal = useMemo(
    () => detailed.reduce((acc, line) => acc + line.product.price * line.qty, 0),
    [detailed],
  );

  const value = {
    items,
    detailed,
    itemCount,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
