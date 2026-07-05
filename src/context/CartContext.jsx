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

const readStored = () => {
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

const writeStored = (items) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors
  }
};

const makeLineKey = (productId, variantId) => `${productId}::${variantId || "default"}`;

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => readStored());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedId, setLastAddedId] = useState(null);

  useEffect(() => {
    writeStored(items);
  }, [items]);

  const addItem = useCallback((product, { variant, quantity = 1, openDrawer = true } = {}) => {
    const variantId = variant?.id || "default";
    const key = makeLineKey(product.id, variantId);
    setItems((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          imageIllustration: product.illustration,
          imageAlt: product.illustrationAlt || product.name,
          variantId,
          variantLabel: variant?.label || "",
          tone: variant?.tone || "gold",
          quantity: Math.max(1, quantity),
        },
      ];
    });
    setLastAddedId(key);
    if (openDrawer) setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((line) =>
          line.key === key ? { ...line, quantity: Math.max(0, quantity) } : line
        )
        .filter((line) => line.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const summary = useMemo(() => {
    const itemCount = items.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = items.reduce((sum, line) => sum + line.price * line.quantity, 0);
    const shipping = subtotal >= 80 || subtotal === 0 ? 0 : 8;
    const total = subtotal + shipping;
    return { itemCount, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isDrawerOpen,
      lastAddedId,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openDrawer,
      closeDrawer,
    }),
    [items, summary, isDrawerOpen, lastAddedId, addItem, removeItem, updateQuantity, clearCart, openDrawer, closeDrawer]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
