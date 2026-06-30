import React, { createContext, useContext } from 'react';
import { useCart as useCartLogic } from '../lib/useCart';

const CartContext = createContext();

export function CartProvider({ children }) {
  const cart = useCartLogic();
  
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}