import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Persist cart in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('velmora_cart');
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      console.warn('Cart restore failed', e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('velmora_cart', JSON.stringify(items));
    } catch (e) {
      console.warn('Cart save failed', e);
    }
  }, [items]);

  const addItem = useCallback((product, { variant = 'Gold', quantity = 1 } = {}) => {
    setItems((current) => {
      const key = `${product.id}__${variant}`;
      const existing = current.find((i) => i.key === key);
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          queryHint: product.queryHint,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((i) => i.key !== key));
      return;
    }
    setItems((current) =>
      current.map((i) => (i.key === key ? { ...i, quantity } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const itemCount = items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    return { itemCount, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clear, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
