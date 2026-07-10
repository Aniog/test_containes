import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getProductById } from '../data/products';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora_cart';

const initialState = {
  items: [],
  isOpen: false
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD_CART': {
      return { ...state, items: action.payload };
    }
    case 'ADD_ITEM': {
      const { productId, variant, quantity = 1 } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.productId === productId && item.variant === variant
      );

      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity
        };
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { productId, variant, quantity }]
      };
    }
    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.productId === productId && item.variant === variant)
        )
      };
    }
    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.productId === productId && item.variant === variant)
          )
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        )
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const items = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: items });
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }, [state.items]);

  const addItem = (productId, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { productId, variant, quantity } });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeItem = (productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };

  const updateQuantity = (productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  };

  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  // Computed values
  const cartItems = state.items.map(item => {
    const product = getProductById(item.productId);
    return {
      ...item,
      product,
      subtotal: product ? product.price * item.quantity : 0
    };
  }).filter(item => item.product);

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  const value = {
    items: state.items,
    cartItems,
    itemCount,
    subtotal,
    isOpen: state.isOpen,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    openCart,
    closeCart,
    clearCart
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
