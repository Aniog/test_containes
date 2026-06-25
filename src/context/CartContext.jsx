import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora-cart-v1';
const DRAWER_KEY = 'velmora-drawer-open';

const initialState = {
  items: [], // { id, name, price, tone, qty }
  isOpen: false,
};

function loadInitial() {
  try {
    if (typeof window === 'undefined') return initialState;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const items = JSON.parse(raw);
    if (Array.isArray(items)) return { items, isOpen: false };
  } catch {
    // ignore
  }
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, tone = product.tones?.[0] || 'Gold', qty = 1 } = action;
      const key = `${product.id}:${tone}`;
      const existing = state.items.find((it) => it.key === key);
      let items;
      if (existing) {
        items = state.items.map((it) =>
          it.key === key ? { ...it, qty: it.qty + qty } : it
        );
      } else {
        items = [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            tone,
            qty,
          },
        ];
      }
      return { ...state, items, isOpen: true };
    }
    case 'REMOVE': {
      return {
        ...state,
        items: state.items.filter((it) => it.key !== action.key),
      };
    }
    case 'UPDATE_QTY': {
      const qty = Math.max(1, action.qty);
      return {
        ...state,
        items: state.items.map((it) =>
          it.key === action.key ? { ...it, qty } : it
        ),
      };
    }
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen };
    case 'CLEAR':
      return { items: [], isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const value = useMemo(() => {
    const subtotal = state.items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const count = state.items.reduce((sum, it) => sum + it.qty, 0);
    return {
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      count,
      addItem: (product, opts) => dispatch({ type: 'ADD', product, ...opts }),
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      updateQty: (key, qty) => dispatch({ type: 'UPDATE_QTY', key, qty }),
      open: () => dispatch({ type: 'OPEN' }),
      close: () => dispatch({ type: 'CLOSE' }),
      toggle: () => dispatch({ type: 'TOGGLE' }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
