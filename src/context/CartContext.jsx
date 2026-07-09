import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora-cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // silent
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant.name}`;
      const existing = state.find(item => item.key === key);

      if (existing) {
        return state.map(item =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...state,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant: variant.name,
          variantColor: variant.color,
          quantity,
          imageQuery: product.imageQuery,
        },
      ];
    }

    case 'REMOVE_ITEM':
      return state.filter(item => item.key !== action.payload.key);

    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) return state.filter(item => item.key !== key);
      return state.map(item =>
        item.key === key ? { ...item, quantity } : item
      );
    }

    case 'CLEAR_CART':
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

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

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
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

export default CartContext;
