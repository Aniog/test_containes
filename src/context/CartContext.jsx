import React, { createContext, useContext, useState, useCallback } from 'react';
import { useToast } from '@/components/ui/sonner';

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const addItem = useCallback((product, quantity = 1, variant = 'gold') => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        toast({
          title: 'Updated bag',
          description: `${product.name} quantity updated`,
        });
        return updated;
      }

      toast({
        title: 'Added to bag',
        description: `${product.name} has been added to your shopping bag`,
      });
      return [...prev, { ...product, quantity, variant }];
    });
  }, [toast]);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) => {
      const filtered = prev.filter(
        (item) => !(item.id === productId && item.variant === variant)
      );
      toast({
        title: 'Removed from bag',
        description: 'Item has been removed from your shopping bag',
      });
      return filtered;
    });
  }, [toast]);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
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

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
