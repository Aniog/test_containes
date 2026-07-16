import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora_cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // silent
  }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        next = state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        next = [...state, { ...action.payload, quantity: 1 }];
      }
      break;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      break;
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        next = state.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        );
      } else {
        next = state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;
    case 'CLEAR':
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = useCallback((product, variant = 'gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        cartNameId: product.cartNameId,
        cartImgId: product.cartImgId,
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
