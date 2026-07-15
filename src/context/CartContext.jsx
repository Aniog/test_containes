import { createContext, useContext, useReducer, useMemo, useCallback } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.tone === action.payload.tone
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.tone === action.payload.tone
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
          isOpen: true,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.tone === action.payload.tone)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.tone === action.payload.tone
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        ),
      };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: action.payload };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, tone, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        tone,
        quantity,
      },
    });
  }, []);

  const removeItem = useCallback((id, tone) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, tone } });
  }, []);

  const updateQuantity = useCallback((id, tone, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, tone, quantity } });
  }, []);

  const setIsOpen = useCallback((open) => {
    dispatch({ type: 'TOGGLE_DRAWER', payload: open });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const totals = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    return { count, subtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      ...state,
      ...totals,
      addItem,
      removeItem,
      updateQuantity,
      setIsOpen,
      clearCart,
    }),
    [state, totals, addItem, removeItem, updateQuantity, setIsOpen, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
