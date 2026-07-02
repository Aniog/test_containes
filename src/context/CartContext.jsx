import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, tone = 'gold') => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id && item.tone === tone);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity, tone }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, tone) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, tone);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartCount,
      }}
    >
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