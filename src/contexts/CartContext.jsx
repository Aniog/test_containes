import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant, qty = 1) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          displayName: product.displayName,
          price: product.price,
          variant,
          quantity: qty,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, variant) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)));
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant);
      return;
    }
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);
  const toggleCart = useCallback(() => setIsOpen(prev => !prev), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totalItems,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      totalItems,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
