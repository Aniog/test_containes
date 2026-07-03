import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  useEffect(() => {
    const saved = localStorage.getItem('velmora-cart');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        parsed.items.forEach((item) => dispatch({ type: 'ADD_ITEM', payload: item }));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(state));
  }, [state.items]);

  const addItem = (product, variant = 'gold', quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', payload: { ...product, variant, quantity } });

  const removeItem = (id, variant) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });

  const updateQuantity = (id, variant, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });

  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        cartCount,
        cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
