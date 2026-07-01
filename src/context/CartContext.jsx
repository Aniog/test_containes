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
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from sessionStorage on mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem('velmora_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem('velmora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...currentCart,
          {
            ...product,
            variant,
            quantity,
            cartItemId: `${product.id}-${variant}-${Date.now()}`,
          },
        ];
      }
    });
    // Do not auto-open drawer on add — user can open via cart icon
    // This prevents the drawer from intercepting the click target
  };

  const removeFromCart = (cartItemId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isCartOpen,
    openCart,
    closeCart,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};

export default CartContext;