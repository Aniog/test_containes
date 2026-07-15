import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        imageIds: product.imageIds,
        imgSearch: product.imgSearch,
      }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id, variant) => {
    setItems(prev => prev.filter(item => !(item.id === id && item.variant === variant)));
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, variant);
      return;
    }
    setItems(prev => prev.map(item =>
      item.id === id && item.variant === variant
        ? { ...item, quantity }
        : item
    ));
  }, [removeFromCart]);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
