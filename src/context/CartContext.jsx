import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora-cart';

// Load cart from localStorage
const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
  }
  return [];
};

// Save cart to localStorage
const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
};

const initialState = {
  items: loadCartFromStorage(),
  isOpen: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      );

      let newItems;
      if (existingIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        };
        newItems = [...state.items, newItem];
      }
      return { ...state, items: newItems };
    }

    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.productId === productId && item.variant === variant)
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.productId === productId && item.variant === variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        ),
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
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    saveCartToStorage(state.items);
  }, [state.items]);

  // Calculate totals
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Actions
  const addItem = (product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
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

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
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

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
