import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCart(prev => {
      const existingItem = prev.find(item => 
        item.id === product.id && item.variant === variant
      );
      
      if (existingItem) {
        return prev.map(item => 
          (item.id === product.id && item.variant === variant)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setCart(prev => prev.filter(item => 
      !(item.id === productId && item.variant === variant)
    ));
  };

  const updateQuantity = (productId, variant, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variant);
      return;
    }
    
    setCart(prev => prev.map(item => 
      (item.id === productId && item.variant === variant)
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      isCartOpen,
      setIsCartOpen,
      cartCount,
      cartTotal
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
