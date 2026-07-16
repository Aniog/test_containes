import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart');
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(items));
  }, [items]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addItem = (product, quantity = 1, options = {}) => {
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === product.id && JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...currentItems, { ...product, quantity, options }];
    });
    openCart();
  };

  const removeItem = (productId, options = {}) => {
    setItems(currentItems => 
      currentItems.filter(item => 
        !(item.id === productId && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const updateQuantity = (productId, options, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(currentItems => {
      const existingItemIndex = currentItems.findIndex(
        item => item.id === productId && JSON.stringify(item.options) === JSON.stringify(options)
      );
      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity = newQuantity;
        return newItems;
      }
      return currentItems;
    });
  };

  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
