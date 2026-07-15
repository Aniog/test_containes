import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = 'Gold') => {
    setCart((prev) => {
      const existing = prev.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existing !== -1) {
        const updated = [...prev];
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + 1,
        };
        return updated;
      }

      return [
        ...prev,
        {
          ...product,
          variant,
          quantity: 1,
        },
      ];
    });
    // Auto-open cart drawer when item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.variant === variant))
    );
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getCartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const getCartTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        getCartTotal,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
