import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PRODUCTS, getProductById } from "@/data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

function readStored() {
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
        typeof line.variant === "string" &&
        typeof line.qty === "number" &&
        line.qty > 0,
    );
  } catch {
    return [];
  }
}

function writeStored(lines) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    /* ignore quota errors */
  }
}

// A "key" is a stable identifier for a cart line: product id + variant.
function lineKey(id, variant) {
  return `${id}::${variant}`;
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    writeStored(lines);
  }, [lines]);

  const addItem = useCallback((id, variant = "Gold", qty = 1) => {
    const product = getProductById(id);
    if (!product) return;
    if (!product.variants.includes(variant)) variant = product.variants[0];
    setLines((prev) => {
      const key = lineKey(id, variant);
      const existing = prev.find((l) => lineKey(l.id, l.variant) === key);
      if (existing) {
        return prev.map((l) =>
          lineKey(l.id, l.variant) === key
            ? { ...l, qty: Math.min(l.qty + qty, 99) }
            : l,
        );
      }
      return [...prev, { id, variant, qty }];
    });
    setIsOpen(true);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1200);
  }, []);

  const updateQty = useCallback((id, variant, qty) => {
    setLines((prev) => {
      const key = lineKey(id, variant);
      if (qty <= 0) {
        return prev.filter((l) => lineKey(l.id, l.variant) !== key);
      }
      return prev.map((l) =>
        lineKey(l.id, l.variant) === key
          ? { ...l, qty: Math.min(qty, 99) }
          : l,
      );
    });
  }, []);

  const removeItem = useCallback((id, variant) => {
    setLines((prev) =>
      prev.filter((l) => lineKey(l.id, l.variant) !== lineKey(id, variant)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  // Hydrate rich product info on top of stored lines for display.
  const detailedLines = useMemo(
    () =>
      lines
        .map((l) => {
          const product = getProductById(l.id);
          if (!product) return null;
          return { ...l, product };
        })
        .filter(Boolean),
    [lines],
  );

  const itemCount = useMemo(
    () => detailedLines.reduce((sum, l) => sum + l.qty, 0),
    [detailedLines],
  );

  const subtotal = useMemo(
    () => detailedLines.reduce((sum, l) => sum + l.qty * l.product.price, 0),
    [detailedLines],
  );

  const value = useMemo(
    () => ({
      lines: detailedLines,
      rawLines: lines,
      itemCount,
      subtotal,
      isOpen,
      justAdded,
      addItem,
      updateQty,
      removeItem,
      clear,
      openCart,
      closeCart,
      // total product list available for cross-component needs
      allProducts: PRODUCTS,
    }),
    [
      detailedLines,
      lines,
      itemCount,
      subtotal,
      isOpen,
      justAdded,
      addItem,
      updateQty,
      removeItem,
      clear,
      openCart,
      closeCart,
    ],
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
