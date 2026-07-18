import React, { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === product.id && i.variantId === variant.id
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.variantId === variant.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          cartItemId: `${product.id}-${variant.id}-${Date.now()}`,
          productId: product.id,
          variantId: variant.id,
          name: product.name,
          price: product.price,
          variantLabel: variant.label,
          imageId: product.images[0].id,
          quantity,
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

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
