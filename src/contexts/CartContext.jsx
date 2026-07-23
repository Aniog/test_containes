import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Could not parse cart from local storage");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setCartItems(prev => prev.filter(
      item => !(item.id === productId && item.variant === variant)
    ));
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, variant);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.variant === variant) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
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
