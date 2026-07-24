import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
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
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
    } else {
      setItems(prev =>
        prev.map(item =>
          item.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      setIsCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
    }}>
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
