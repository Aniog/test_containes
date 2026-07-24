import { createContext, useContext, useEffect, useReducer, useState, useCallback, useMemo } from 'react';
import { findProductById } from '@/data/products';

const STORAGE_KEY = 'velmora-cart-v1';
const OPEN_EVENT = 'velmora:cart-open';
const CLOSE_EVENT = 'velmora:cart-close';

const CartContext = createContext(null);

function readStored() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) => line && typeof line.productId === 'string' && typeof line.quantity === 'number'
    );
  } catch (err) {
    console.warn('[cart] could not read storage', err);
    return [];
  }
}

function writeStored(lines) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch (err) {
    console.warn('[cart] could not write storage', err);
  }
}

function lineKey(productId, tone) {
  return `${productId}::${tone || 'gold'}`;
}

function reducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return action.lines || [];
    case 'add': {
      const { productId, tone, quantity } = action;
      const key = lineKey(productId, tone);
      const existing = state.find((l) => l.key === key);
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...state, { key, productId, tone, quantity }];
    }
    case 'set-quantity': {
      const { key, quantity } = action;
      if (quantity <= 0) {
        return state.filter((l) => l.key !== key);
      }
      return state.map((l) => (l.key === key ? { ...l, quantity } : l));
    }
    case 'remove': {
      return state.filter((l) => l.key !== action.key);
    }
    case 'clear':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // hydrate from storage on mount
  useEffect(() => {
    const stored = readStored();
    if (stored.length) dispatch({ type: 'hydrate', lines: stored });
    setHydrated(true);
  }, []);

  // persist on every change after hydration
  useEffect(() => {
    if (!hydrated) return;
    writeStored(lines);
  }, [lines, hydrated]);

  // cross-component open/close events (used by header icon)
  useEffect(() => {
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    window.addEventListener(OPEN_EVENT, open);
    window.addEventListener(CLOSE_EVENT, close);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      window.removeEventListener(CLOSE_EVENT, close);
    };
  }, []);

  // body scroll lock when drawer open
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const addToCart = useCallback((productId, { tone = 'gold', quantity = 1 } = {}) => {
    dispatch({ type: 'add', productId, tone, quantity });
    setIsOpen(true);
  }, []);

  const setLineQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'set-quantity', key, quantity });
  }, []);

  const removeLine = useCallback((key) => {
    dispatch({ type: 'remove', key });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'clear' });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const detailedLines = useMemo(
    () =>
      lines.map((l) => {
        const product = findProductById(l.productId);
        return {
          ...l,
          product,
          lineTotal: product ? product.price * l.quantity : 0,
        };
      }),
    [lines]
  );

  const subtotal = useMemo(
    () => detailedLines.reduce((sum, l) => sum + l.lineTotal, 0),
    [detailedLines]
  );

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      detailedLines,
      subtotal,
      itemCount,
      isOpen,
      addToCart,
      setLineQuantity,
      removeLine,
      clearCart,
      openCart,
      closeCart,
    }),
    [lines, detailedLines, subtotal, itemCount, isOpen, addToCart, setLineQuantity, removeLine, clearCart, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used inside CartProvider');
  }
  return ctx;
}

export const openCartEvent = OPEN_EVENT;
export const closeCartEvent = CLOSE_EVENT;
