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
    // silently fail
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
      );
      let next;
      if (existing) {
        next = state.map((item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      } else {
        next = [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      saveCart(next);
      return next;
    }
    case 'REMOVE_ITEM': {
      const next = state.filter(
        (item) =>
          !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      saveCart(next);
      return next;
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity < 1) {
        const next = state.filter(
          (item) =>
            !(item.id === action.payload.id && item.variant === action.payload.variant)
        );
        saveCart(next);
        return next;
      }
      const next = state.map((item) =>
        item.id === action.payload.id &&
        item.variant === action.payload.variant
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      saveCart(next);
      return next;
    }
    case 'CLEAR_CART': {
      saveCart([]);
      return [];
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
        summary: product.summary,
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

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
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
