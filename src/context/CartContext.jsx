import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    setCart(prev => {
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
    setDrawerOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variant) => {
    setCart(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  }, []);

  const updateQuantity = useCallback((productId, variant, qty) => {
    if (qty <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === productId && item.variant === variant ? { ...item, quantity: qty } : item
    ));
  }, [removeFromCart]);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart, drawerOpen, setDrawerOpen,
      addToCart, removeFromCart, updateQuantity,
      itemCount, subtotal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
