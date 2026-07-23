import React, { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartQuantity: quantity,
      cartId: `${product.id}-${variant}-${Date.now()}`,
    };
    
    setCart((prevCart) => [...prevCart, cartItem]);
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart`, {
      description: `${variant} • Qty ${quantity}`,
    });
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
    toast.info('Item removed from cart');
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartId === cartId ? { ...item, cartQuantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.cartQuantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.cartQuantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};