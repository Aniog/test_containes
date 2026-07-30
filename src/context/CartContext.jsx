import { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.items[key];

      if (existing) {
        return {
          ...state,
          items: {
            ...state.items,
            [key]: { ...existing, quantity: existing.quantity + quantity },
          },
        };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            productId: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            image: product.images[0],
            slug: product.slug,
          },
        },
      };
    }

    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        const { [key]: _, ...rest } = state.items;
        return { ...state, items: rest };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...state.items[key], quantity },
        },
      };
    }

    case 'REMOVE_ITEM': {
      const { [action.payload.key]: _, ...rest } = state.items;
      return { ...state, items: rest };
    }

    case 'CLEAR_CART':
      return { ...state, items: {} };

    case 'TOGGLE_DRAWER':
      return { ...state, isDrawerOpen: action.payload ?? !state.isDrawerOpen };

    default:
      return state;
  }
};

const initialState = {
  items: {},
  isDrawerOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, variant, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
    dispatch({ type: 'TOGGLE_DRAWER', payload: true });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { key } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const toggleDrawer = useCallback((open) => {
    dispatch({ type: 'TOGGLE_DRAWER', payload: open });
  }, []);

  const cartCount = useMemo(
    () => Object.values(state.items).reduce((sum, item) => sum + item.quantity, 0),
    [state.items]
  );

  const cartTotal = useMemo(
    () => Object.values(state.items).reduce((sum, item) => sum + item.price * item.quantity, 0),
    [state.items]
  );

  const cartItems = useMemo(
    () => Object.entries(state.items).map(([key, item]) => ({ key, ...item })),
    [state.items]
  );

  const value = {
    items: state.items,
    cartItems,
    cartCount,
    cartTotal,
    isDrawerOpen: state.isDrawerOpen,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    toggleDrawer,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
