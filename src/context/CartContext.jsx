import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora-cart';

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id && 
                item.variant === action.payload.variant
      );
      
      if (existingIndex > -1) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === action.payload.productId && 
                   item.variant === action.payload.variant)
        ),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.product.id === productId && item.variant === variant)
          ),
        };
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item
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
    
    case 'HYDRATE': {
      return { ...state, items: action.payload };
    }
    
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          dispatch({ type: 'HYDRATE', payload: parsedCart });
        }
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state.items]);
  
  const addItem = (product, quantity = 1, variant = null) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, quantity, variant },
    });
  };
  
  const removeItem = (productId, variant = null) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { productId, variant },
    });
  };
  
  const updateQuantity = (productId, variant = null, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { productId, variant, quantity },
    });
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
  
  // Computed values
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
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
