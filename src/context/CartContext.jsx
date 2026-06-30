import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant,
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(item.id === action.payload.id && item.variant === action.payload.variant),
        ),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(item.id === action.payload.id && item.variant === action.payload.variant),
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    }
    case 'TOGGLE_DRAWER':
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isDrawerOpen: false,
  });

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeItem = useCallback((item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  }, []);

  const updateQuantity = useCallback((item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity } });
  }, []);

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  }, []);

  const openDrawer = useCallback(() => {
    dispatch({ type: 'OPEN_DRAWER' });
  }, []);

  const closeDrawer = useCallback(() => {
    dispatch({ type: 'CLOSE_DRAWER' });
  }, []);

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isDrawerOpen: state.isDrawerOpen,
        cartCount,
        cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
