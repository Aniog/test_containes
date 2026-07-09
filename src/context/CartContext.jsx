import { createContext, useContext, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback((product, options = {}) => {
    const { tone = "gold", quantity = 1 } = options;
    setItems((current) => {
      const existing = current.find(
        (i) => i.product.id === product.id && i.tone === tone
      );
      if (existing) {
        return current.map((i) =>
          i.product.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...current, { product, tone, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter((i) => !(i.product.id === productId && i.tone === tone))
    );
  }, []);

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity < 1) return;
    setItems((current) =>
      current.map((i) =>
        i.product.id === productId && i.tone === tone ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    );
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
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totals,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
