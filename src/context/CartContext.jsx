import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("velmora_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("velmora_cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, variant, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.variant === variant
      );
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { product, variant, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.product.id === productId && item.variant === variant)
      )
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = {
    items,
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    ...totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
