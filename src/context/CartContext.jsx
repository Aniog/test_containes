import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

function loadCart() {
  try {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  } catch { /* noop */ }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${variant}`;
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, {
        key,
        productId: product.id,
        name: product.shortName,
        price: product.price,
        variant,
        quantity,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
      }];
    });
  }, []);

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.key !== key));
      return;
    }
    setItems(prev => prev.map(i =>
      i.key === key ? { ...i, quantity } : i
    ));
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity,
      itemCount, subtotal,
      isDrawerOpen, openDrawer, closeDrawer,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
