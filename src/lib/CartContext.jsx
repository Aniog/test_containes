import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Could not parse cart from local storage", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addItem = (product) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id && item.variant === product.variant
      );

      if (existingItemIndex > -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += product.quantity || 1;
        return newItems;
      }

      return [...currentItems, { ...product, quantity: product.quantity || 1 }];
    });
    openCart();
  };

  const removeItem = (productId, variant) => {
    setItems((currentItems) => 
      currentItems.filter(item => !(item.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) return;
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
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
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}