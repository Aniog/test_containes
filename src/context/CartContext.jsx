import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const CART_KEY = "velmora-cart-v1";

const readStoredCart = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const addItem = (productId, { variant = "Gold", quantity = 1 } = {}) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === productId && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { productId, variant, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (productId, variant) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variant === variant)
      )
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const { lineItems, subtotal, count } = useMemo(() => {
    const lineItems = items
      .map((item) => {
        const product = getProduct(item.productId);
        return product ? { ...item, product } : null;
      })
      .filter(Boolean);
    const subtotal = lineItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const count = lineItems.reduce((sum, item) => sum + item.quantity, 0);
    return { lineItems, subtotal, count };
  }, [items]);

  const value = {
    lineItems,
    subtotal,
    count,
    isCartOpen,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
