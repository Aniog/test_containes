import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, quantity = 1, variant = 'Gold') => {
    setItems(currentItems => {
      const existingIndex = currentItems.findIndex(
        item => item.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const newItems = [...currentItems];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity
        };
        return newItems;
      }

      return [...currentItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity
      }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((itemId, variant) => {
    setItems(currentItems => currentItems.filter(
      item => !(item.id === itemId && item.variant === variant)
    ));
  }, []);

  const updateQuantity = useCallback((itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId, variant);
      return;
    }

    setItems(currentItems => 
      currentItems.map(item => 
        item.id === itemId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen(prev => !prev),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
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
