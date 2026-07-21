import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart state interface
const initialState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
};

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error);
  }
  return initialState;
};

// Save cart to localStorage
const saveCartToStorage = (state) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

// Cart actions
const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.material === action.payload.material
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id || item.material !== action.payload.material);
      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id && item.material === action.payload.material
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0);

      newState = {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case 'TOGGLE_CART':
      newState = {
        ...state,
        isOpen: !state.isOpen,
      };
      break;

    case 'OPEN_CART':
      newState = {
        ...state,
        isOpen: true,
      };
      break;

    case 'CLOSE_CART':
      newState = {
        ...state,
        isOpen: false,
      };
      break;

    case 'CLEAR_CART':
      newState = {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
      break;

    default:
      return state;
  }

  saveCartToStorage(newState);
  return newState;
};

// Create context
const CartContext = createContext(null);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);

  useEffect(() => {
    saveCartToStorage(state);
  }, [state]);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantity = (id, material, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, material, quantity } });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    openCart,
    closeCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
