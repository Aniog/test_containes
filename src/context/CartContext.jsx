import { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (item) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (i) => i.id === item.id && i.variant === item.variant
      );

      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }

      return [...currentItems, { ...item, quantity: item.quantity || 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id, variant) => {
    setItems((current) => current.filter((i) => !(i.id === id && i.variant === variant)));
  };

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant);
      return;
    }
    setItems((current) =>
      current.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    );
  };

  const cartTotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const value = {
    isOpen,
    openCart,
    closeCart,
    items,
    addItem,
    removeItem,
    updateQuantity,
    cartTotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}