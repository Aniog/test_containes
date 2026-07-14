import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, variant }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartOpen,
      setCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};