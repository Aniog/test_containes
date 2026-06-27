import React, { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from 'react';
import { getProductById } from '@/data/products';

const STORAGE_KEY = 'velmora_cart_v1';

const CartContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { productId, variantId, quantity } = action;
      const key = `${productId}__${variantId}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { key, productId, variantId, quantity },
        ],
      };
    }
    case 'SET_QUANTITY': {
      const { key, quantity } = action;
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.key !== key) };
      }
      return {
        items: state.items.map((i) =>
          i.key === key ? { ...i, quantity } : i
        ),
      };
    }
    case 'REMOVE': {
      return { items: state.items.filter((i) => i.key !== action.key) };
    }
    case 'CLEAR':
      return { items: [] };
    case 'HYDRATE':
      return action.state && Array.isArray(action.state.items)
        ? { items: action.state.items }
        : state;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        dispatch({ type: 'HYDRATE', state: parsed });
      }
    } catch {
      // ignore corrupt state
    }
    setHydrated(true);
  }, []);

  // Persist on change (after hydration so we don't clobber)
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }, [state, hydrated]);

  const enrichedItems = useMemo(() => {
    return state.items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === item.variantId) || product.variants[0];
        return {
          ...item,
          product,
          variant,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter(Boolean);
  }, [state.items]);

  const itemCount = useMemo(
    () => enrichedItems.reduce((acc, i) => acc + i.quantity, 0),
    [enrichedItems]
  );

  const subtotal = useMemo(
    () => enrichedItems.reduce((acc, i) => acc + i.lineTotal, 0),
    [enrichedItems]
  );

  const addToCart = useCallback((productId, variantId = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD', productId, variantId, quantity });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'SET_QUANTITY', key, quantity });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const value = {
    items: enrichedItems,
    rawItems: state.items,
    itemCount,
    subtotal,
    addToCart,
    setQuantity,
    removeItem,
    clearCart,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
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