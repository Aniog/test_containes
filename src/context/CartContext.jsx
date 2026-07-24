import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart";

function loadCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items]);

  const addItem = useCallback((product, variant = "gold", quantity = 1) => {
    const key = `${product.id}__${variant}`;
    // Reuse the already-resolved stock image URL for this product so the cart
    // drawer can show a thumbnail without needing a new (dynamic) image query.
    let image = null;
    if (product.mainImgId) {
      const el = document.querySelector(`[data-strk-img-id="${product.mainImgId}"]`);
      if (el && el.src && !el.src.startsWith("data:")) image = el.src;
    }
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity, image: i.image || image } : i
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image,
        },
      ];
    });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        count: acc.count + i.quantity,
        subtotal: acc.subtotal + i.quantity * i.price,
      }),
      { count: 0, subtotal: 0 }
    );
  }, [items]);

  const value = useMemo(
    () => ({
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
    }),
    [items, count, subtotal, isCartOpen, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
