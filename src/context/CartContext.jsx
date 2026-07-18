import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Quick persistence
  useEffect(() => {
    const saved = localStorage.getItem('velmora_cart');
    if (saved) {
      try {
        setCartItems(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing cart data', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.variant === variant) 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prev, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        (item.id === id && item.variant === variant) ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
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
}

export function useCart() {
  return useContext(CartContext);
}
