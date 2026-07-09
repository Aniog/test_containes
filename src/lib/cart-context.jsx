import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product, quantity = 1, variant = null) => {
    setItems(current => {
      const existingItem = current.find(
        item => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return current.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { ...product, quantity, variant }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId, variant = null) => {
    setItems(current => 
      current.filter(item => !(item.id === productId && item.variant === variant))
    );
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant);
      return;
    }

    setItems(current =>
      current.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const totalItems = useMemo(() => 
    items.reduce((total, item) => total + item.quantity, 0),
  [items]);

  const totalPrice = useMemo(() => 
    items.reduce((total, item) => total + (item.price * item.quantity), 0),
  [items]);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      totalItems,
      totalPrice,
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