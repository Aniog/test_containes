import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((s) => !s), []);

  const addToCart = useCallback((product, quantity = 1, variant = null) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.data?.name || product.name,
          price: product.data?.price || product.price,
          image_url: product.data?.image_url || product.image_url,
          slug: product.data?.slug || product.slug,
          variant,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter((i) => !(i.id === id && i.variant === variant))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
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
