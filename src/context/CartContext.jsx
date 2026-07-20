import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('velmora-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Failed to parse cart from local storage", e);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, variant = null) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id && item.variant === variant);
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }
      return [...prev, { ...product, quantity, variant }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, variant = null) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)));
  };

  const updateQuantity = (productId, variant = null, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        (item.id === productId && item.variant === variant)
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart: cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        isCartOpen, 
        setIsCartOpen,
        cartTotal,
        cartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};