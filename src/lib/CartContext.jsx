import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, tone = 'gold') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.tone === tone);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.tone === tone 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, tone }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, tone) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.tone === tone) {
        const newQty = type === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
