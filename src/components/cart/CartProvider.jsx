import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const stored = localStorage.getItem('velmora-cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems((currentItems) => {
      const existing = currentItems.find(
        (item) => item.id === product.id && item.variant === product.variant
      );
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...currentItems, { ...product, cartItemId: `${product.id}-${product.variant}-${Date.now()}` }];
    });
    setIsOpen(true);
  };

  const removeItem = (cartItemId) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, quantity) => {
    if (quantity < 1) return removeItem(cartItemId);
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (item.price * item.quantity), 0), [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal
      }}
    >
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