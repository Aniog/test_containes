import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addToCart = useCallback((product, quantity = 1, variant = 'gold') => {
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
      return [...current, {
        id: product.id,
        name: product.name,
        price: product.price,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
        variant,
        quantity,
      }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = useMemo(() => ({
    items,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    ...totals,
  }), [items, isOpen, openCart, closeCart, toggleCart, addToCart, removeFromCart, updateQuantity, clearCart, totals]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
