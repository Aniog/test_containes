import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatch = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload ?? !state.isOpen };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  isOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, variant, quantity, product },
    });
  }, []);

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  }, []);

  const toggleCart = useCallback((value) => {
    dispatch({ type: 'TOGGLE_CART', payload: value });
  }, []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ ...state, totalItems, subtotal, addItem, removeItem, updateQuantity, toggleCart }}>
      <CartDispatch.Provider value={dispatch}>
        {children}
      </CartDispatch.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
