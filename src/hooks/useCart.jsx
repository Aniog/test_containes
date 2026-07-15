import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, quantity = 1, color = 'gold') => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.color === color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.id,
        color,
        quantity,
      }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, color) => {
    setItems(prevItems =>
      prevItems.filter(item => !(item.id === productId && item.color === color))
    );
  }, []);

  const updateQuantity = useCallback((productId, color, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, color);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
      totalItems,
      subtotal,
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
