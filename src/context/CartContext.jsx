import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('velmora_cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn('LocalStorage access blocked', e);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velmora_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('LocalStorage access blocked', e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setCart((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingItemIndex > -1) {
        const newCart = [...prev];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      }

      return [...prev, { ...product, quantity, variant }];
    });
    
    setIsCartOpen(true);
    toast.success(`${product.name} added to bag`);
  };

  const removeFromCart = (productId, variant) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant, delta) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === productId && item.variant === variant) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
