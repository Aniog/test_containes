import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart";

const readStoredCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) => item && getProduct(item.productId) && item.qty > 0
    );
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
      // storage unavailable — cart still works in memory
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addItem = useCallback((productId, variant = "gold", qty = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === productId && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { productId, variant, qty }];
    });
    const product = getProduct(productId);
    setToast({
      title: "Added to your cart",
      message: product ? product.name : "",
    });
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variant === variant)
      )
    );
  }, []);

  const updateQty = useCallback(
    (productId, variant, qty) => {
      if (qty <= 0) {
        removeItem(productId, variant);
        return;
      }
      setItems((prev) =>
        prev.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, qty }
            : item
        )
      );
    },
    [removeItem]
  );

  const value = useMemo(() => {
    const detailed = items
      .map((item) => ({
        ...item,
        product: getProduct(item.productId),
      }))
      .filter((item) => item.product);
    const count = detailed.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = detailed.reduce(
      (sum, item) => sum + item.qty * item.product.price,
      0
    );
    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      toast,
      addItem,
      removeItem,
      updateQty,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    };
  }, [items, isCartOpen, toast, addItem, removeItem, updateQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
