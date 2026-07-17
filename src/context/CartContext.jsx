import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId && i.variant === action.payload.variant
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload ?? !state.isOpen };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

const initialState = { items: [], isOpen: false };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((item) => dispatch({ type: 'ADD_ITEM', payload: item }), []);
  const removeItem = useCallback((productId, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } }), []);
  const updateQuantity = useCallback((productId, variant, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } }), []);
  const toggleCart = useCallback((val) => dispatch({ type: 'TOGGLE_CART', payload: val }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ ...state, totalItems, subtotal }}>
      <CartDispatchContext.Provider value={{ addItem, removeItem, updateQuantity, toggleCart, closeCart }}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error('useCartDispatch must be inside CartProvider');
  return ctx;
}