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
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
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
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_DRAWER':
      return { ...state, isOpen: true };
    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem('velmora-cart');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        parsed.items.forEach((item) => dispatch({ type: 'ADD_ITEM', payload: item }));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  const addItem = (product, tone = 'gold') => {
    dispatch({ type: 'ADD_ITEM', payload: { id: product.id, name: product.name, price: product.price, tone, image: product.images[tone]?.[0] } });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  const removeItem = (id, tone) => dispatch({ type: 'REMOVE_ITEM', payload: { id, tone } });
  const updateQuantity = (id, tone, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, tone, quantity } });
  const toggleDrawer = () => dispatch({ type: 'TOGGLE_DRAWER' });
  const openDrawer = () => dispatch({ type: 'OPEN_DRAWER' });
  const closeDrawer = () => dispatch({ type: 'CLOSE_DRAWER' });

  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, toggleDrawer, openDrawer, closeDrawer, count, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
