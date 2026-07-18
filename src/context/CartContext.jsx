import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1, variant = 'gold') => {
    setItems(prevItems => {
      const existing = prevItems.find(i => i.id === product.id && i.variant === variant);
      if (existing) {
        return prevItems.map(i => 
          i.id === product.id && i.variant === variant 
            ? { ...i, quantity: i.quantity + quantity } 
            : i
        );
      }
      return [...prevItems, { ...product, quantity, variant }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id, variant) => {
    setItems(prevItems => prevItems.filter(i => !(i.id === id && i.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) return removeFromCart(id, variant);
    setItems(prevItems => 
      prevItems.map(i => 
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
