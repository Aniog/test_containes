import React, { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const existingItem = cart.findIndex(
      item => item.id === product.id && item.variant === variant
    );

    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, variant, quantity }]);
    }
    
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} × ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => window.dispatchEvent(new CustomEvent('open-cart')),
      },
    });
  };

  const removeFromCart = (index) => {
    const item = cart[index];
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.info('Item removed from cart');
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};