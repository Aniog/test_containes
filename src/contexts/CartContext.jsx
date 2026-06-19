import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  cartItems: [],
  isCartOpen: false,
  totalItems: 0,
  totalPrice: 0,
};

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('velmora-cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      return {
        ...initialState,
        cartItems: parsed.cartItems || [],
        totalItems: parsed.totalItems || 0,
        totalPrice: parsed.totalPrice || 0,
      };
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error);
  }
  return initialState;
};

// Save cart to localStorage
const saveCartToStorage = (state) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify({
      cartItems: state.cartItems,
      totalItems: state.totalItems,
      totalPrice: state.totalPrice,
    }));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
};

// Action types
const ActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
};

// Reducer
const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id && item.selectedMaterial === action.payload.selectedMaterial
      );

      let newCartItems;
      if (existingItemIndex > -1) {
        newCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      }

      newState = {
        ...state,
        cartItems: newCartItems,
        totalItems: newCartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const newCartItems = state.cartItems.filter(
        item => !(item.id === action.payload.id && item.selectedMaterial === action.payload.selectedMaterial)
      );

      newState = {
        ...state,
        cartItems: newCartItems,
        totalItems: newCartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case ActionTypes.UPDATE_QUANTITY: {
      const newCartItems = state.cartItems.map(item => {
        if (item.id === action.payload.id && item.selectedMaterial === action.payload.selectedMaterial) {
          return { ...item, quantity: Math.max(1, action.payload.quantity) };
        }
        return item;
      });

      newState = {
        ...state,
        cartItems: newCartItems,
        totalItems: newCartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
      break;
    }

    case ActionTypes.CLEAR_CART: {
      newState = {
        ...state,
        cartItems: [],
        totalItems: 0,
        totalPrice: 0,
      };
      break;
    }

    case ActionTypes.TOGGLE_CART: {
      newState = {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
      break;
    }

    case ActionTypes.OPEN_CART: {
      newState = {
        ...state,
        isCartOpen: true,
      };
      break;
    }

    case ActionTypes.CLOSE_CART: {
      newState = {
        ...state,
        isCartOpen: false,
      };
      break;
    }

    default:
      return state;
  }

  // Save to localStorage
  saveCartToStorage(newState);
  return newState;
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

  const addToCart = (product, selectedMaterial = 'Gold') => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { ...product, selectedMaterial },
    });
  };

  const removeFromCart = (productId, selectedMaterial) => {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: { id: productId, selectedMaterial },
    });
  };

  const updateQuantity = (productId, selectedMaterial, quantity) => {
    dispatch({
      type: ActionTypes.UPDATE_QUANTITY,
      payload: { id: productId, selectedMaterial, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: ActionTypes.CLEAR_CART });
  };

  const toggleCart = () => {
    dispatch({ type: ActionTypes.TOGGLE_CART });
  };

  const openCart = () => {
    dispatch({ type: ActionTypes.OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: ActionTypes.CLOSE_CART });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
