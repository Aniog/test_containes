import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart";

const loadCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works for the session
    }
  }, [items]);

  const addItem = (productId, tone = "Gold", quantity = 1) => {
    setItems((prev) => {
      const key = `${productId}__${tone}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      const product = getProduct(productId);
      return [
        ...prev,
        {
          key,
          productId,
          tone,
          quantity,
          name: product.name,
          price: product.price,
          imgId: product.imgIds.primary,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (key) =>
    setItems((prev) => prev.filter((i) => i.key !== key));

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        count: acc.count + i.quantity,
        subtotal: acc.subtotal + i.price * i.quantity,
      }),
      { count: 0, subtotal: 0 }
    );
  }, [items]);

  const value = {
    items,
    count,
    subtotal,
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

export const useCart = () => useContext(CartContext);
