import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora_cart';

const initialState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.material === action.payload.material
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }

      return {
        ...state,
        items: newItems,
        isOpen: true,
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload),
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      };
    }

    case 'TOGGLE_CART': {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }

    case 'SET_CART_OPEN': {
      return {
        ...state,
        isOpen: action.payload,
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
      };
    }

    case 'LOAD_CART': {
      return {
        ...state,
        items: action.payload || [],
      };
    }

    default:
      return state;
  }
}

function calculateTotals(items) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state.items]);

  // Calculate totals
  const totals = calculateTotals(state.items);

  const addToCart = (product, quantity = 1, material = 'Gold') => {
    const cartId = `${product.id}-${material}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        cartId,
        quantity,
        material,
      },
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const setCartOpen = (isOpen) => {
    dispatch({ type: 'SET_CART_OPEN', payload: isOpen });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = {
    ...state,
    ...totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    setCartOpen,
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
