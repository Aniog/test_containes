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
        newItems[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, items: newItems, isOpen: true };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map((item) => {
        if (item.id === action.payload.id && item.variant === action.payload.variant) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, items: newItems };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calculate totals
  const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  const updateQuantity = (id, variant, quantity) => 
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        isOpen: state.isOpen,
        cartTotal,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};