import { createContext, useContext, useReducer, useCallback } from 'react';
import products from '@/data/products';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === existing.id && i.variant === existing.variant
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      const product = products.find((p) => p.id === action.payload.id);
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            variant: action.payload.variant,
            quantity: action.payload.quantity,
            imageId: product.images.primary,
          },
        ],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
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

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, variant, quantity } });
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  }, []);

  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const value = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    openCart,
    closeCart,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}