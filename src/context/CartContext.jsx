import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from 'react';
import { PRODUCTS, getProduct } from '@/data/products';

const STORAGE_KEY = 'velmora_cart_v1';

const CartContext = createContext(null);

function lineKey(productId, variantId) {
  return `${productId}__${variantId}`;
}

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload || [];
    case 'ADD': {
      const { productId, variantId, qty } = action;
      const key = lineKey(productId, variantId);
      const existing = state.find((l) => l.key === key);
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, qty: l.qty + qty } : l
        );
      }
      return [...state, { key, productId, variantId, qty }];
    }
    case 'REMOVE':
      return state.filter((l) => l.key !== action.key);
    case 'SET_QTY': {
      const { key, qty } = action;
      if (qty <= 0) return state.filter((l) => l.key !== key);
      return state.map((l) => (l.key === key ? { ...l, qty } : l));
    }
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

function readStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l) => l && typeof l.productId === 'string' && typeof l.variantId === 'string'
    );
  } catch {
    return [];
  }
}

function writeStorage(state) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, []);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch({ type: 'INIT', payload: readStorage() });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(lines);
  }, [lines, hydrated]);

  const addItem = useCallback((productId, variantId = 'gold', qty = 1) => {
    dispatch({ type: 'ADD', productId, variantId, qty });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key });
  }, []);

  const setQty = useCallback((key, qty) => {
    dispatch({ type: 'SET_QTY', key, qty });
  }, []);

  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const items = useMemo(() => {
    return lines
      .map((line) => {
        const product = getProduct(line.productId);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === line.variantId) || product.variants[0];
        return { ...line, product, variant };
      })
      .filter(Boolean);
  }, [lines]);

  const itemCount = useMemo(
    () => items.reduce((acc, l) => acc + l.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((acc, l) => acc + l.product.price * l.qty, 0),
    [items]
  );

  const value = {
    items,
    itemCount,
    subtotal,
    isOpen,
    hydrated,
    addItem,
    removeItem,
    setQty,
    clear,
    openCart,
    closeCart,
    lineKey,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}

// Ensure we don't reference unused symbol warning for PRODUCTS
void PRODUCTS;
