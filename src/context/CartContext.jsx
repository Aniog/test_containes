import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(
        (i) => i.id === action.item.id && i.variant === (action.item.variant || 'Default')
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id && i.variant === (action.item.variant || 'Default')
              ? { ...i, quantity: i.quantity + (action.item.quantity || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: action.item.quantity || 1 }],
      };
    }
    case 'REMOVE': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && i.variant === action.variant)
        ),
      };
    }
    case 'UPDATE_QTY': {
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.variant === action.variant
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: action.open ?? !state.isOpen };
    default:
      return state;
  }
}

function getInitialState() {
  try {
    const raw = localStorage.getItem('velmora_cart');
    if (raw) {
      const parsed = JSON.parse(raw);
      return { items: Array.isArray(parsed.items) ? parsed.items : [], isOpen: false };
    }
  } catch {}
  return { items: [], isOpen: false };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialState);

  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ state, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
