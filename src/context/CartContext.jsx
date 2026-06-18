import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora.cart.v1';
const DRAWER_FLASH_KEY = '__velmora_drawer_open';

function readInitial() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (e) {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      // ignore quota errors
    }
  }, [items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((product, opts = {}) => {
    const variant = opts.variant || product.variants?.[0] || 'Gold';
    const qty = opts.qty || 1;
    const lineId = `${product.id}__${variant}`;
    setItems((current) => {
      const existing = current.find((i) => i.lineId === lineId);
      if (existing) {
        return current.map((i) =>
          i.lineId === lineId ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [
        ...current,
        {
          lineId,
          productId: product.id,
          name: product.name,
          tagline: product.tagline,
          price: product.price,
          variant,
          qty,
          imgId: product.images?.[0]?.id || `${product.id}-cart`,
        },
      ];
    });
    if (!opts.silent) setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId));
  }, []);

  const updateQty = useCallback((lineId, qty) => {
    setItems((current) =>
      current
        .map((i) => (i.lineId === lineId ? { ...i, qty: Math.max(1, qty) } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items],
  );
  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
      clear,
      subtotal,
      itemCount,
    }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQty, clear, subtotal, itemCount],
  );

  // Keep body scroll locked while drawer open
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.dataset[DRAWER_FLASH_KEY] = '1';
      return () => {
        document.body.style.overflow = prev;
        delete document.body.dataset[DRAWER_FLASH_KEY];
      };
    }
    return undefined;
  }, [isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
