import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const storageKey = 'velmora-cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function saveCart(items) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items));
  } catch {}
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const saveAndDispatch = useCallback((action) => {
    dispatch(action);
  }, []);

  const addItem = useCallback((product) => {
    const action = { type: 'ADD_ITEM', payload: product };
    const next = cartReducer(loadCart(), action);
    saveCart(next);
    dispatch(action);
  }, []);

  const removeItem = useCallback((id) => {
    const action = { type: 'REMOVE_ITEM', payload: { id } };
    const next = cartReducer(loadCart(), action);
    saveCart(next);
    dispatch(action);
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const action = { type: 'UPDATE_QUANTITY', payload: { id, quantity } };
    const next = cartReducer(loadCart(), action);
    saveCart(next);
    dispatch(action);
  }, []);

  const clearCart = useCallback(() => {
    saveCart([]);
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
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