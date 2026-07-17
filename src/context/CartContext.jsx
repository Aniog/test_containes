import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // storage full — silently ignore
  }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        next = state.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        next = [...state, { ...action.payload }];
      }
      break;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
      );
      break;
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        next = state.filter(
          (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
        );
      } else {
        next = state.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        );
      }
      break;
    case 'CLEAR_CART':
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0].src,
        variant,
        quantity,
      },
    });
  }, []);

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}
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
