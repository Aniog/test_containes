import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, quantity = 1, variant = 'gold') => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, variant, quantity }];
    });
  }, []);

  const removeItem = useCallback((id, variant) => {
    setItems(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(id, variant);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isOpen,
      openCart,
      closeCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
