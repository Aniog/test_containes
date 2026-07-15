import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.items[key];
      
      if (existing) {
        return {
          ...state,
          items: {
            ...state.items,
            [key]: { ...existing, quantity: existing.quantity + quantity },
          },
        };
      }
      
      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            product,
            variant,
            quantity,
          },
        },
      };
    }
    
    case 'REMOVE_ITEM': {
      const { key } = action.payload;
      const newItems = { ...state.items };
      delete newItems[key];
      return { ...state, items: newItems };
    }
    
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = { ...state.items };
        delete newItems[key];
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...state.items[key], quantity },
        },
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: {} };
    
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} });

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { key } });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const cartCount = useMemo(() => {
    return Object.values(state.items).reduce((sum, item) => sum + item.quantity, 0);
  }, [state.items]);

  const cartTotal = useMemo(() => {
    return Object.values(state.items).reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }, [state.items]);

  const cartItems = useMemo(() => {
    return Object.entries(state.items).map(([key, item]) => ({
      key,
      ...item,
    }));
  }, [state.items]);

  const value = {
    items: state.items,
    cartItems,
    cartCount,
    cartTotal,
    addItem,
    removeItem,
    updateQuantity,
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
