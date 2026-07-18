import React, { createContext, useContext, useState, useCallback } from 'react';
import { toast } from 'sonner';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, quantity = 1, tone = 'gold') => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.tone === tone
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsOpen(true);
    toast.success('Added to cart', {
      description: `${product.name} — ${tone}`,
    });
  }, []);

  const removeItem = useCallback((productId, tone) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === productId && i.tone === tone))
    );
  }, []);

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity < 1) {
      setItems((prev) =>
        prev.filter((i) => !(i.id === productId && i.tone === tone))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === productId && i.tone === tone ? { ...i, quantity } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

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
        totalPrice,
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
