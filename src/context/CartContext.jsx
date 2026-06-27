import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, quantity = 1, variant = 'gold') => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }

      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        variant,
        quantity
      }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((itemId, variant) => {
    setItems(prev => prev.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  }, []);

  const updateQuantity = useCallback((itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId, variant);
      return;
    }
    setItems(prev => prev.map(item => {
      if (item.id === itemId && item.variant === variant) {
        return { ...item, quantity };
      }
      return item;
    }));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

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
