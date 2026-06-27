import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext(null);

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.material === action.payload.material
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity || 1;
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
        total: calculateTotal([...state.items, action.payload])
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const updatedItems = state.items.filter(item => item.cartId !== action.payload);
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const updatedItems = state.items.map(item => {
        if (item.cartId === action.payload.cartId) {
          return { ...item, quantity: Math.max(1, action.payload.quantity) };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        items: [],
        total: 0
      };

    default:
      return state;
  }
};

// Calculate Total
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

// Generate Cart ID
const generateCartId = (item) => {
  return `${item.id}-${item.material || 'default'}`;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem('velmora-cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
    return { items: [], total: 0 };
  };

  const [state, dispatch] = useReducer(cartReducer, null, loadCart);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }, [state]);

  // Cart Actions
  const addToCart = (product, quantity = 1, material = 'Gold') => {
    const cartItem = {
      ...product,
      cartId: generateCartId({ id: product.id, material }),
      quantity,
      material,
      addedAt: new Date().toISOString()
    };

    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: cartItem });
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { cartId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    items: state.items,
    total: state.total,
    itemCount: getItemCount(),
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

// Custom Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
