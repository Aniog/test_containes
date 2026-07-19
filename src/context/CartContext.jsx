import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

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
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_DRAWER':
      return { ...state, isOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context && context !== undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export function useCartActions() {
  const dispatch = useCartDispatch();
  const cart = useCart();

  const addItem = useCallback(
    (product, variant = 'Gold', quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', payload: { ...product, variant, quantity } });
      dispatch({ type: 'OPEN_DRAWER' });
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (id, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } }),
    [dispatch]
  );

  const updateQuantity = useCallback(
    (id, variant, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } }),
    [dispatch]
  );

  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), [dispatch]);
  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), [dispatch]);
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [dispatch]);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    items: cart.items,
    isOpen: cart.isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    toggleDrawer,
    openDrawer,
    closeDrawer,
  };
}
