import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((s) => !s), []);

  const addItem = useCallback((product, variant = null, quantity = 1) => {
    setItems((prev) => {
      const variantName = variant?.name || 'Default';
      const existing = prev.find(
        (i) => i.id === product.id && i.variantName === variantName
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variantName === variantName
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: variant?.price_adjustment
            ? product.price + variant.price_adjustment
            : product.price,
          image: product.image_url || '',
          variantName,
          quantity,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, variantName) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === id && i.variantName === variantName))
    );
  }, []);

  const updateQuantity = useCallback((id, variantName, quantity) => {
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter((i) => !(i.id === id && i.variantName === variantName))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.variantName === variantName ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
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
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
