import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1, options = {}) => {
    setCartItems(prev => {
      // Create a unique key for the item based on ID and options (like color)
      const optionKey = JSON.stringify(options);
      const existingItemIndex = prev.findIndex(
        item => item.id === product.id && JSON.stringify(item.options) === optionKey
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { ...product, quantity, options }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, options = {}) => {
    const optionKey = JSON.stringify(options);
    setCartItems(prev => prev.filter(
      item => !(item.id === id && JSON.stringify(item.options) === optionKey)
    ));
  };

  const updateQuantity = (id, options = {}, newQuantity) => {
    if (newQuantity < 1) return;
    
    const optionKey = JSON.stringify(options);
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id && JSON.stringify(item.options) === optionKey) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
