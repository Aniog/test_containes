import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.variant === action.payload.variant
      );

      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, id: Date.now().toString() }],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return { ...state, items: newItems };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    openCart,
    closeCart,
    clearCart,
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

export default CartContext;
