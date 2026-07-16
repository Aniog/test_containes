import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart from localStorage if available (simple persistence)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('velmora_cart');
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {
      console.warn('Failed to load cart', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('velmora_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart', e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    let resolvedSrc = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    if (typeof document !== 'undefined') {
      const imgNode = document.querySelector(`img[data-strk-img-id="${product.imgId}"]`);
      if (imgNode && imgNode.src && !imgNode.src.includes('data:image/svg+xml')) {
        resolvedSrc = imgNode.src;
      }
    }

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, variant, resolvedSrc }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id, variant, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.variant === variant) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      isCartOpen, 
      setIsCartOpen,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}