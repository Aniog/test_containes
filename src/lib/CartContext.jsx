import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, option = 'Gold') => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.option === option);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.option === option 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, option }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (itemId, option) => {
    setCart((prev) => prev.filter(item => !(item.id === itemId && item.option === option)));
  };

  const updateQuantity = (itemId, option, delta) => {
    setCart((prev) => prev.map(item => {
      if (item.id === itemId && item.option === option) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.data.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      cartTotal, 
      cartCount, 
      isOpen, 
      setIsOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
