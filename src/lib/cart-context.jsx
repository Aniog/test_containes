import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return { ...state, items: newItems, isOpen: true };
      }
      
      return { 
        ...state, 
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
        isOpen: true 
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => !(item.id === action.payload.id && item.variant === action.payload.variant)),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
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
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    // Try to load cart from local storage
    if (typeof window !== 'undefined') {
      try {
        const localData = localStorage.getItem('velmora-cart');
        return localData ? { ...initial, items: JSON.parse(localData) } : initial;
      } catch (e) {
        console.error("Failed to parse cart from local storage", e);
        return initial;
      }
    }
    return initial;
  });

  // Save to local storage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('velmora-cart', JSON.stringify(state.items));
    }
  }, [state.items]);

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    cartTotal: state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    cartCount: state.items.reduce((count, item) => count + item.quantity, 0),
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } }),
    updateQuantity: (id, variant, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
