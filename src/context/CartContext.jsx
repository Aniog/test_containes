import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.tone === tone
      );
      
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...currentItems, { 
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image1 || product.images?.[0] || product.image, // handle formats
        tone,
        quantity
      }];
    });
    setIsOpen(true);
  };

  const removeItem = (id, tone = 'Gold') => {
    setItems((currentItems) => 
      currentItems.filter((item) => !(item.id === id && item.tone === tone))
    );
  };

  const updateQuantity = (id, delta, tone = 'Gold') => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id && item.tone === tone) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      getCartCount,
      getSubtotal
    }}>
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
