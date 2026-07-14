import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmoraCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart data");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmoraCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity, option = '18k Gold') => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.option === option);
      
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      
      return [...prev, { ...product, quantity, option }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, option) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.option === option)));
  };

  const updateQuantity = (productId, option, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => prev.map(item => 
      (item.id === productId && item.option === option) 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
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
};
