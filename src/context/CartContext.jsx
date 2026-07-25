import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart-v1";

const readStoredCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable; cart still works in-memory.
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addItem = useCallback((productId, variant = "Gold", quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === productId && item.variant === variant,
      );
      if (existing) {
        return current.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, { productId, variant, quantity }];
    });
    setToast({ productName: product.name, variant });
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.variant === variant),
      ),
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter(
          (item) =>
            !(item.productId === productId && item.variant === variant),
        );
      }
      return current.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item,
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const dismissToast = useCallback(() => setToast(null), []);

  const value = useMemo(() => {
    const detailedItems = items
      .map((item) => ({ ...item, product: getProductById(item.productId) }))
      .filter((item) => item.product);
    const count = detailedItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = detailedItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0,
    );
    return {
      items: detailedItems,
      count,
      subtotal,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toast,
      dismissToast,
    };
  }, [
    items,
    isCartOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toast,
    dismissToast,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
