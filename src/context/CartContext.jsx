import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, quantity = 1, variant = 'gold') => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variant === variant
      );
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity, variant }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === productId && i.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      setItems((prev) =>
        prev.filter((i) => !(i.id === productId && i.variant === variant))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === productId && i.variant === variant ? { ...i, quantity } : i
      )
    );
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
