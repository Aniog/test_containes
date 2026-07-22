import React, { createContext, useContext, useState } from 'react';

const CartUIContext = createContext(null);

export const CartUIProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <CartUIContext.Provider value={{ cartOpen, setCartOpen }}>
      {children}
    </CartUIContext.Provider>
  );
};

export const useCartUI = () => {
  const context = useContext(CartUIContext);
  if (!context) throw new Error('useCartUI must be used within a CartUIProvider');
  return context;
};
