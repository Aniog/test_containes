import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'velmora-cart';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );

      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.payload.quantity || 1),
        };
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
          ),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }

    case 'TOGGLE_DRAWER': {
      return { ...state, isDrawerOpen: !state.isDrawerOpen };
    }

    case 'OPEN_DRAWER': {
      return { ...state, isDrawerOpen: true };
    }

    case 'CLOSE_DRAWER': {
      return { ...state, isDrawerOpen: false };
    }

    default:
      return state;
  }
};

const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        items: parsed.items || [],
        isDrawerOpen: false,
      };
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error);
  }
  return { items: [], isDrawerOpen: false };
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch (error) {
      console.error('Error saving cart to storage:', error);
    }
  }, [state.items]);

  const addItem = (product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    });
    dispatch({ type: 'OPEN_DRAWER' });
  };

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  };

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  };

  const openDrawer = () => {
    dispatch({ type: 'OPEN_DRAWER' });
  };

  const closeDrawer = () => {
    dispatch({ type: 'CLOSE_DRAWER' });
  };

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    items: state.items,
    isDrawerOpen: state.isDrawerOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleDrawer,
    openDrawer,
    closeDrawer,
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
