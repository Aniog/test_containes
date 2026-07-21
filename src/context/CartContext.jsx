import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.variant === action.payload.variant
              ? { ...i, qty: i.qty + action.payload.qty }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };
    }
    case 'REMOVE': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QTY': {
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, qty: Math.max(1, action.payload.qty) }
            : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    case 'TOGGLE_DRAWER':
      return { ...state, open: !state.open };
    case 'SET_DRAWER':
      return { ...state, open: action.payload };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], open: false });

  const addItem = useCallback((item) => dispatch({ type: 'ADD', payload: item }), []);
  const removeItem = useCallback((item) => dispatch({ type: 'REMOVE', payload: item }), []);
  const updateQty = useCallback((item) => dispatch({ type: 'UPDATE_QTY', payload: item }), []);
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), []);
  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), []);
  const setDrawer = useCallback((open) => dispatch({ type: 'SET_DRAWER', payload: open }), []);

  const totalQty = state.items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        open: state.open,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        toggleDrawer,
        setDrawer,
        totalQty,
        subtotal,
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
