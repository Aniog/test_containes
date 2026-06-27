import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(
        (i) => i.id === action.product.id && i.variant === action.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id && i.variant === action.variant
              ? { ...i, qty: i.qty + (action.qty || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            variant: action.variant,
            imageId: action.product.images[0],
            qty: action.qty || 1,
          },
        ],
      };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && i.variant === action.variant)
        ),
      };
    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.variant === action.variant
            ? { ...i, qty: Math.max(1, action.qty) }
            : i
        ),
      };
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen };
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

  const addToCart = useCallback(
    (product, variant, qty = 1) => {
      dispatch({ type: 'ADD', product, variant, qty });
    },
    []
  );

  const removeFromCart = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE', id, variant });
  }, []);

  const updateQty = useCallback((id, variant, qty) => {
    dispatch({ type: 'UPDATE_QTY', id, variant, qty });
  }, []);

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  }, []);

  const closeDrawer = useCallback(() => {
    dispatch({ type: 'CLOSE_DRAWER' });
  }, []);

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQty,
        toggleDrawer,
        closeDrawer,
        itemCount,
        subtotal,
      }}
    >
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
