import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('velmora-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = 'gold') => {
    setCart(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && item.variant === variant
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, variant) => {
    setCart(prev => prev.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  };

  const updateQuantity = (itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId, variant);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
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
