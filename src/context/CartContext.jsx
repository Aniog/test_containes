import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}-${variant}`;
      const existing = prev.find((i) => `${i.id}-${i.variant}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.id}-${i.variant}` === key
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ];
    });
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((itemId, variant) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === itemId && i.variant === variant))
    );
  }, []);

  const updateQuantity = useCallback((itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId, variant);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === itemId && i.variant === variant ? { ...i, quantity } : i
      )
    );
  }, [removeItem]);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        itemCount,
        subtotal,
        drawerOpen,
        setDrawerOpen,
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
