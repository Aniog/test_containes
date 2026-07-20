import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant?.tone || 'default'}`;
      const existing = state.items.find((item) => item.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            product,
            variant: variant || product.variants[0],
            quantity,
          },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.key !== action.payload),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.key !== key),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.key === key ? { ...item, quantity } : item
        ),
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
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
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === null) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export function useCartActions() {
  const dispatch = useCartDispatch();

  const addItem = useCallback(
    (product, variant, quantity) =>
      dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } }),
    [dispatch]
  );

  const removeItem = useCallback(
    (key) => dispatch({ type: 'REMOVE_ITEM', payload: key }),
    [dispatch]
  );

  const updateQuantity = useCallback(
    (key, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } }),
    [dispatch]
  );

  const openCart = useCallback(
    () => dispatch({ type: 'OPEN_CART' }),
    [dispatch]
  );

  const closeCart = useCallback(
    () => dispatch({ type: 'CLOSE_CART' }),
    [dispatch]
  );

  const toggleCart = useCallback(
    () => dispatch({ type: 'TOGGLE_CART' }),
    [dispatch]
  );

  return { addItem, removeItem, updateQuantity, openCart, closeCart, toggleCart };
}
