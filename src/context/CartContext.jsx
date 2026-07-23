import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, variant) => {
    const existingItem = cart.find(item => item.id === product.id && item.variant === variant);
    if (existingItem) {
      setCart(cart.map(item => 
        (item.id === product.id && item.variant === variant) 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity, variant }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart(cart.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) return removeFromCart(id, variant);
    setCart(cart.map(item => 
      (item.id === id && item.variant === variant) 
        ? { ...item, quantity } 
        : item
    ));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

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
