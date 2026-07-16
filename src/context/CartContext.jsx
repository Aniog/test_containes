import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToCart = useCallback((product, color = 'gold', quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.color === color);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, color, quantity }];
    });
    setDrawerOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, color) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.color === color)));
  }, []);

  const updateQuantity = useCallback((productId, color, quantity) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => !(item.id === productId && item.color === color)));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.color === color ? { ...item, quantity } : item
      )
    );
  }, []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = useCallback(() => setDrawerOpen(true), []);
  const closeCart = useCallback(() => setDrawerOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        drawerOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        openCart,
        closeCart,
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