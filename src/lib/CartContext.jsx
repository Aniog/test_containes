import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora_cart';

const loadCart = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch { /* noop */ }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id && item.color === action.payload.color
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, { ...action.payload }];
    }
    case 'REMOVE_ITEM': {
      return state.filter(
        (item) => !(item.id === action.payload.id && item.color === action.payload.color)
      );
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.payload.id && item.color === action.payload.color)
        );
      }
      return state.map((item) =>
        item.id === action.payload.id && item.color === action.payload.color
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    }
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = (product, color = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        color,
        quantity,
        image: product.images[0],
      },
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (id, color) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, color } });
  };

  const updateQuantity = (id, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isDrawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openDrawer,
        closeDrawer,
      }}
    >
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
