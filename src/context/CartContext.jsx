import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1, tone = 'gold') => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.tone === tone
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prevItems, { ...product, quantity, tone }];
    });
    setIsDrawerOpen(true);
  };

  const removeFromCart = (id, tone) => {
    setItems((prevItems) => 
      prevItems.filter((item) => !(item.id === id && item.tone === tone))
    );
  };

  const updateQuantity = (id, tone, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id, tone);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.tone === tone
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isDrawerOpen,
        toggleDrawer,
        closeDrawer,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};