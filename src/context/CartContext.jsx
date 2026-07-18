import React, { createContext, useContext, useReducer, useCallback } from 'react';

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
          (item) => !(item.id === action.payload.id && item.tone === action.payload.tone)
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.tone === action.payload.tone
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter((item) => item.quantity > 0),
      };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  const addItem = useCallback((product, tone = 'Gold', quantity = 1) => {
    // Capture the resolved image URL from the DOM so the cart drawer
    // doesn't need data-strk-img (which can't be resolved at build time)
    let imageUrl = '';
    const imgEl = document.querySelector(`[data-strk-img-id="${product.imgId}"]`);
    if (imgEl && imgEl.src && !imgEl.src.startsWith('data:')) {
      imageUrl = imgEl.src;
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, tone, quantity, imageUrl, shortDescription: product.shortDescription },
    });
    dispatch({ type: 'OPEN_CART' });
  }, []);

  const removeItem = useCallback((id, tone = 'Gold') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, tone } });
  }, []);

  const updateQuantity = useCallback((id, tone, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, tone, quantity } });
  }, []);

  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, toggleCart, openCart, closeCart, itemCount, total }}
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
