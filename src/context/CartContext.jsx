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

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartQuantity: quantity,
      cartId: `${product.id}-${variant}-${Date.now()}`
    };
    
    setCart(prev => [...prev, cartItem]);
    setIsCartOpen(true);
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} × ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true)
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
    toast.info('Item removed from cart');
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, cartQuantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);
  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};