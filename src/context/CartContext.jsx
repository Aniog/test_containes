import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCartItems(prev => {
      const existing = prev.find(item => 
        item.product.id === product.id && item.variant === variant
      );
      
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant) => {
    setCartItems(prev => 
      prev.filter(item => 
        !(item.product.id === productId && item.variant === variant)
      )
    );
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variant);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => 
    sum + item.product.price * item.quantity, 0
  );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
