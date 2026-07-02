import { createContext, useContext, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant
      );
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageIds?.primary,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === productId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      ...totals,
    }),
    [items, isOpen, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart, totals]
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
