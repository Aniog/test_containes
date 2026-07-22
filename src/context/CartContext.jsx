import { createContext, useContext, useMemo, useState, useEffect, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("velmora_cart");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("velmora_cart", JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, variant = null, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          cartItemId: `${product.id}-${variant || "default"}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((cartItemId) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.cartItemId === cartItemId ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
