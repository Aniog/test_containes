import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        ),
      };
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
  });

  const addItem = useCallback(
    (product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    []
  );
  const removeItem = useCallback(
    (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    []
  );
  const updateQuantity = useCallback(
    (id, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
    []
  );
  const toggleDrawer = useCallback(
    () => dispatch({ type: 'TOGGLE_DRAWER' }),
    []
  );
  const openDrawer = useCallback(
    () => dispatch({ type: 'OPEN_DRAWER' }),
    []
  );
  const closeDrawer = useCallback(
    () => dispatch({ type: 'CLOSE_DRAWER' }),
    []
  );

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        drawerOpen: state.drawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        itemCount,
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