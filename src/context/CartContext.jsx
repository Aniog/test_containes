import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.tone === action.payload.tone
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.tone === action.payload.tone
              ? { ...item, quantity: item.quantity + 1 }
              : item
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
          (item) => !(item.id === action.payload.id && item.tone === action.payload.tone)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.tone === action.payload.tone
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('velmora-cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.items.forEach((item) => dispatch({ type: 'ADD_ITEM', payload: item }));
      }
    } catch (e) {
      console.error('Failed to load cart', e);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(state));
  }, [state]);

  const addItem = (product, tone = 'gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        tone,
        image: product.images?.[tone]?.[0] || product.images?.gold?.[0],
      },
    });
  };

  const removeItem = (id, tone) => dispatch({ type: 'REMOVE_ITEM', payload: { id, tone } });
  const updateQuantity = (id, tone, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, tone, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, count, total }}
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
