import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to load cart from localStorage:', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addItem = async (product, quantity = 1, variant = null) => {
    setIsLoading(true);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id && item.variant === variant
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      }];
    });

    setIsLoading(false);
    setIsOpen(true);
  };

  const removeItem = (id, variant = null) => {
    setItems(prev => prev.filter(
      item => !(item.id === id && item.variant === variant)
    ));
  };

  const updateQuantity = (id, variant = null, quantity) => {
    if (quantity <= 0) {
      removeItem(id, variant);
      return;
    }

    setItems(prev =>
      prev.map(item =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      setIsOpen,
      isLoading,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
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
