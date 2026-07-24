import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from local storage");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, tone = 'gold') => {
    setCart(prev => {
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
    setCart(prev => prev.filter(item => !(item.id === productId && item.tone === tone)));
  };

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId && item.tone === tone 
        ? { ...item, quantity }
        : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};