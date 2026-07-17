import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

const initialCart = {
  items: [],
  isDrawerOpen: false,
  totalItems: 0,
  subtotal: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      let newItems;
      if (existing) {
        newItems = state.items.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        newItems = [...state.items, { ...action.payload }];
      }
      const totalItems = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items: newItems, totalItems, subtotal, isDrawerOpen: true };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
      );
      const totalItems = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items: newItems, totalItems, subtotal };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: action.payload });
      }
      const newItems = state.items.map((i) =>
        i.id === action.payload.id && i.variant === action.payload.variant
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
      const totalItems = newItems.reduce((sum, i) => sum + i.quantity, 0);
      const subtotal = newItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
      return { ...state, items: newItems, totalItems, subtotal };
    }
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false };
    case 'CLEAR_CART':
      return { ...initialCart };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (ctx === null) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (ctx === null) throw new Error('useCartDispatch must be used within CartProvider');
  return ctx;
}
