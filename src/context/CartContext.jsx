import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext(null);

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
        return {
          ...state,
          items: updatedItems,
          isOpen: true
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        isOpen: true
      };
    }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.variant === action.payload.variant)
        )
      };

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, variant, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => !(item.id === id && item.variant === variant))
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id && item.variant === variant
            ? { ...item, quantity }
            : item
        )
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };

    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen
      };

    case CART_ACTIONS.OPEN_CART:
      return {
        ...state,
        isOpen: true
      };

    case CART_ACTIONS.CLOSE_CART:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};

// Initial State
const initialState = {
  items: [],
  isOpen: false
};

// Cart Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage on init
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('velmora-cart');
      if (savedCart) {
        return { ...initialState, items: JSON.parse(savedCart) };
      }
    }
    return initialState;
  });

  // Save cart to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('velmora-cart', JSON.stringify(state.items));
    }
  }, [state.items]);

  // Calculate totals
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    ...state,
    itemCount,
    subtotal,
    addItem: (item) => dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item }),
    removeItem: (id, variant) => dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id, variant } }),
    updateQuantity: (id, variant, quantity) => dispatch({ 
      type: CART_ACTIONS.UPDATE_QUANTITY, 
      payload: { id, variant, quantity } 
    }),
    clearCart: () => dispatch({ type: CART_ACTIONS.CLEAR_CART }),
    toggleCart: () => dispatch({ type: CART_ACTIONS.TOGGLE_CART }),
    openCart: () => dispatch({ type: CART_ACTIONS.OPEN_CART }),
    closeCart: () => dispatch({ type: CART_ACTIONS.CLOSE_CART })
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
