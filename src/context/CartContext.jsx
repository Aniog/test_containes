import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart context
const CartContext = createContext(null);

// Cart actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Cart reducer
function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + (action.payload.quantity || 1),
          totalPrice: state.totalPrice + action.payload.price * (action.payload.quantity || 1),
        };
      }

      const newItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems + (action.payload.quantity || 1),
        totalPrice: state.totalPrice + action.payload.price * (action.payload.quantity || 1),
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const itemToRemove = state.items.find(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (!itemToRemove) return state;

      const newItems = state.items.filter(
        item => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (itemIndex === -1) return state;

      const item = state.items[itemIndex];
      const quantityDiff = action.payload.quantity - item.quantity;
      const updatedItems = [...state.items];
      updatedItems[itemIndex] = { ...item, quantity: action.payload.quantity };

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (item.price * quantityDiff),
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Load cart from localStorage
function loadCartFromStorage() {
  try {
    const savedCart = localStorage.getItem('velmora_cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return initialState;
}

// Save cart to localStorage
function saveCartToStorage(state) {
  try {
    localStorage.setItem('velmora_cart', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}

// Cart provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);

  useEffect(() => {
    saveCartToStorage(state);
  }, [state]);

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { ...product, variant, quantity },
    });
  };

  const removeFromCart = (productId, variant) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { id: productId, variant },
    });
  };

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant);
      return;
    }
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { id: productId, variant, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export default CartContext;
