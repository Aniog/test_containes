import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart context
const CartContext = createContext(null);

// Cart actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    
    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case CART_ACTIONS.UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

// Calculate totals
const calculateTotals = (items) => {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return {
    itemCount,
    subtotal,
    total: subtotal // Add tax/shipping later
  };
};

// Cart provider component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem('velmora_cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
    return { items: [] };
  };
  
  const [state, dispatch] = useReducer(cartReducer, null, loadCart);
  
  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velmora_cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [state]);
  
  // Calculate totals
  const totals = calculateTotals(state.items);
  
  // Action dispatchers
  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
  };
  
  const removeFromCart = (productId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
  };
  
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    dispatch({ 
      type: CART_ACTIONS.UPDATE_QUANTITY, 
      payload: { id: productId, quantity } 
    });
  };
  
  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };
  
  const value = {
    items: state.items,
    ...totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};

export default CartContext;
