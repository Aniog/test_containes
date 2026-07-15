import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on init
    const savedCart = localStorage.getItem('velmora-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCartItems(prev => {
      const existingItem = prev.find(item =>
        item.id === product.id && item.selectedVariant === variant
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.selectedVariant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, {
        ...product,
        quantity,
        selectedVariant: variant || product.variants[0]
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId, variant) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === itemId && item.selectedVariant === variant))
    );
  };

  const updateQuantity = (itemId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, variant);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId && item.selectedVariant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
