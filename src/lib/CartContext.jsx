import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.product.id && i.variant === action.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.product.id && i.variant === action.variant
              ? { ...i, quantity: i.quantity + (action.quantity || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: action.product.id,
            name: action.product.name,
            price: action.product.price,
            imageId: action.product.images[0],
            imageRatio: action.product.imageRatio,
            imageWidth: action.product.imageWidth,
            variant: action.variant || 'Gold',
            quantity: action.quantity || 1,
          },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.productId && i.variant === action.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === action.productId && i.variant === action.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.productId && i.variant === action.variant
            ? { ...i, quantity: action.quantity }
            : i
        ),
      };
    }
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

const initialState = {
  items: [],
  isOpen: false,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

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
