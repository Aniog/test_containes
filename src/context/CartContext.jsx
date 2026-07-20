import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('velmora_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to parse cart from local storage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCart((prev) => {
      const existingKey = prev.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingKey >= 0) {
        const newCart = [...prev];
        newCart[existingKey].quantity += quantity;
        return newCart;
      }

      return [...prev, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant = null, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    setCart((prev) => {
      const newCart = [...prev];
      const index = newCart.findIndex((item) => item.id === productId && item.variant === variant);
      if (index >= 0) {
        newCart[index].quantity = newQuantity;
      }
      return newCart;
    });
  };

  const clearCart = () => setCart([]);

  const cartTotalInfo = useMemo(() => {
    return cart.reduce(
      (acc, item) => ({
        count: acc.count + item.quantity,
        total: acc.total + item.price * item.quantity,
      }),
      { count: 0, total: 0 }
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount: cartTotalInfo.count,
        cartTotal: cartTotalInfo.total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
