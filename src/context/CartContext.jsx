import { createContext, useContext, useState, useCallback, useMemo } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant = "gold", quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const closeCart = useCallback(() => setIsOpen(false), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      closeCart,
      openCart,
      toggleCart,
      totalItems,
      subtotal,
    }),
    [
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      closeCart,
      openCart,
      toggleCart,
      totalItems,
      subtotal,
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
