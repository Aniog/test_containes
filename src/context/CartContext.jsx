import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId && item.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
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
          (item) => !(item.productId === action.payload.productId && item.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.productId === action.payload.productId && item.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
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
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx && ctx !== undefined) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) {
    throw new Error('useCartDispatch must be used within CartProvider');
  }
  return {
    addItem: useCallback(
      (product, variant = 'Gold', quantity = 1) =>
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            productId: product.id,
            variant,
            quantity,
            name: product.name,
            price: product.price,
            imageQuery: product.images.primary,
          },
        }),
      [dispatch]
    ),
    removeItem: useCallback(
      (productId, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } }),
      [dispatch]
    ),
    updateQuantity: useCallback(
      (productId, variant, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } }),
      [dispatch]
    ),
    toggleCart: useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [dispatch]),
    openCart: useCallback(() => dispatch({ type: 'OPEN_CART' }), [dispatch]),
    closeCart: useCallback(() => dispatch({ type: 'CLOSE_CART' }), [dispatch]),
  };
}
