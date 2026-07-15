import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const getInitialCart = () => {
  try {
    const saved = localStorage.getItem('velmora_cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
      );
      if (existing) {
        next = state.map((item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
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
        (item) =>
          !(
            item.id === action.payload.id &&
            item.variant === action.payload.variant
          )
      );
      break;
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity < 1) {
        next = state.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.variant === action.payload.variant
            )
        );
      } else {
        next = state.map((item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;
    case 'CLEAR_CART':
      next = [];
      break;
    default:
      return state;
  }
  localStorage.setItem('velmora_cart', JSON.stringify(next));
  return next;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, getInitialCart);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, dispatch, cartCount, cartTotal }}
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
