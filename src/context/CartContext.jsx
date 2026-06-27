import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  isDrawerOpen: false,
  totalItems: 0,
  totalPrice: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.cartId !== action.payload);
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.cartId === action.payload.cartId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    
    case 'OPEN_DRAWER':
      return {
        ...state,
        isDrawerOpen: true
      };
    
    case 'CLOSE_DRAWER':
      return {
        ...state,
        isDrawerOpen: false
      };
    
    case 'CLEAR_CART':
      return initialState;
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    const cartId = `${product.id}-${variant}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        cartId,
        variant,
        quantity
      }
    });
  }, []);
  
  const removeFromCart = useCallback((cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  }, []);
  
  const updateQuantity = useCallback((cartId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { cartId, quantity }
    });
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
  
  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);
  
  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleDrawer,
    openDrawer,
    closeDrawer,
    clearCart
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}