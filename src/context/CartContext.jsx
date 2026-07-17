import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora-cart';

const initialState = {
  items: [],
  isOpen: false,
};

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...initialState, items: parsed.items || [] };
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error);
  }
  return initialState;
}

function saveCartToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
  } catch (error) {
    console.error('Error saving cart to storage:', error);
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.payload.quantity || 1),
        };
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };
    }
    
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.uniqueId !== action.payload),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { uniqueId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.uniqueId !== uniqueId),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.uniqueId === uniqueId ? { ...item, quantity } : item
        ),
      };
    }
    
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    
    case 'OPEN_CART': {
      return { ...state, isOpen: true };
    }
    
    case 'CLOSE_CART': {
      return { ...state, isOpen: false };
    }
    
    case 'TOGGLE_CART': {
      return { ...state, isOpen: !state.isOpen };
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);
  
  useEffect(() => {
    saveCartToStorage(state);
  }, [state.items]);
  
  const addItem = (product, variant = 'Gold', quantity = 1) => {
    const uniqueId = `${product.id}-${variant}-${Date.now()}`;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        uniqueId,
        variant,
        quantity,
      },
    });
    dispatch({ type: 'OPEN_CART' });
  };
  
  const removeItem = (uniqueId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: uniqueId });
  };
  
  const updateQuantity = (uniqueId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { uniqueId, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };
  
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };
  
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };
  
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const value = {
    items: state.items,
    isOpen: state.isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
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

export default CartContext;
