import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addToCart = useCallback((product, quantity = 1, variantId = null) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variantId === variantId
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variantId === variantId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          cartId: `${product.id}-${variantId ?? "default"}-${Date.now()}`,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity,
          variantId,
          variantLabel: variantId
            ? product.variants.find((v) => v.id === variantId)?.label
            : null,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((cartId) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  }, []);

  const updateQuantity = useCallback((cartId, quantity) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.cartId !== cartId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.cartId === cartId ? { ...i, quantity } : i))
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
