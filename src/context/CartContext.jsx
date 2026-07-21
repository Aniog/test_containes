import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        i => i.productId === action.payload.productId && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
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
          i => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            i => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
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
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error('useCartDispatch must be used within CartProvider');
  return ctx;
}

export function useCartActions() {
  const dispatch = useCartDispatch();
  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    });
    dispatch({ type: 'OPEN_DRAWER' });
  }, [dispatch]);

  const removeItem = useCallback((productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  }, [dispatch]);

  const updateQuantity = useCallback((productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  }, [dispatch]);

  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), [dispatch]);
  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), [dispatch]);
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [dispatch]);

  const itemCount = useCart().items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = useCart().items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return { addItem, removeItem, updateQuantity, toggleDrawer, openDrawer, closeDrawer, itemCount, subtotal };
}
