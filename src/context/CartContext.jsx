import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products } from "@/data/products";

const STORAGE_KEY = "velmora:cart:v1";

const CartContext = createContext(null);

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
    // ignore quota errors
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored());
  const [isOpen, setIsOpen] = useState(false);

  // Persist to localStorage on every change.
  useEffect(() => {
    writeStored(items);
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  // Add a product. Same product + same tone merges into the same line.
  const addItem = useCallback(
    (product, { tone = null, quantity = 1 } = {}) => {
      setItems((current) => {
        const toneKey = tone || product.toneOptions?.[0] || "Default";
        const existingIndex = current.findIndex(
          (line) =>
            line.productId === product.id && line.tone === toneKey,
        );
        if (existingIndex >= 0) {
          const next = current.slice();
          next[existingIndex] = {
            ...next[existingIndex],
            quantity: next[existingIndex].quantity + quantity,
          };
          return next;
        }
        return [
          ...current,
          {
            productId: product.id,
            tone: toneKey,
            quantity,
            // snapshot price in case catalog changes
            price: product.price,
            name: product.name,
          },
        ];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter(
        (line) => !(line.productId === productId && line.tone === tone),
      ),
    );
  }, []);

  const updateQuantity = useCallback((productId, tone, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter(
          (line) => !(line.productId === productId && line.tone === tone),
        );
      }
      return current.map((line) =>
        line.productId === productId && line.tone === tone
          ? { ...line, quantity }
          : line,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const summary = useMemo(() => {
    const itemCount = items.reduce((acc, line) => acc + line.quantity, 0);
    const subtotal = items.reduce(
      (acc, line) => acc + line.quantity * line.price,
      0,
    );
    return { itemCount, subtotal };
  }, [items]);

  // Hydrate product details (image, etc) from catalog for line items.
  const detailedItems = useMemo(() => {
    return items
      .map((line) => {
        const product = products.find((p) => p.id === line.productId);
        return { ...line, product };
      })
      .filter((line) => Boolean(line.product));
  }, [items]);

  const value = useMemo(
    () => ({
      items: detailedItems,
      rawItems: items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      isOpen,
      ...summary,
    }),
    [
      detailedItems,
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      isOpen,
      summary,
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
