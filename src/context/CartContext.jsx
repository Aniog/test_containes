import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.product.id === product.id && item.variant.id === variant.id
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { product, variant, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setItems(prevItems =>
      prevItems.filter(
        item => !(item.product.id === productId && item.variant.id === variantId)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId && item.variant.id === variantId
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

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
        subtotal,
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
