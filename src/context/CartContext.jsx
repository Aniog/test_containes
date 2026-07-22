import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    setCartItems(prev => {
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
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, variant);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(() => ({
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    cartTotal,
    cartCount,
  }), [cartItems, isCartOpen, addItem, removeItem, updateQuantity, cartTotal, cartCount]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}