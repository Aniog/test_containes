import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora_cart';

const initialState = {
  items: [],
  isOpen: false
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload
      };
    
    case 'ADD_ITEM': {
      const { product, quantity = 1, variant } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.product.id === product.id && item.variant === variant
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
        items: [...state.items, { product, quantity, variant }]
      };
    }
    
    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === productId && item.variant === variant)
        )
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.product.id === productId && item.variant === variant)
          )
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        )
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
    
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'LOAD_CART', payload: parsed });
      }
    } catch (e) {
      console.error('Failed to load cart from storage:', e);
    }
  }, []);
  
  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (e) {
      console.error('Failed to save cart to storage:', e);
    }
  }, [state.items]);
  
  const addItem = (product, quantity = 1, variant) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity, variant } });
    dispatch({ type: 'OPEN_CART' });
  };
  
  const removeItem = (productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };
  
  const updateQuantity = (productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };
  
  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };
  
  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };
  
  const total = state.items.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);
  
  const itemCount = state.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  
  const value = {
    items: state.items,
    isOpen: state.isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    total,
    itemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
