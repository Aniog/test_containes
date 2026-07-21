import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora_cart';

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD_CART': {
      return {
        ...state,
        items: action.payload,
      };
    }
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      );
      
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + 1,
        };
        return { ...state, items: newItems };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, variant, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.id === id && item.variant === variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id && item.variant === variant
            ? { ...item, quantity }
            : item
        ),
      };
    }
    case 'TOGGLE_CART': {
      return { ...state, isOpen: !state.isOpen };
    }
    case 'OPEN_CART': {
      return { ...state, isOpen: true };
    }
    case 'CLOSE_CART': {
      return { ...state, isOpen: false };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
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
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsed });
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [state.items]);

  const addItem = (product, variant = 'Gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
      },
    });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  };

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const openCart = () => dispatch({ type: 'OPEN_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
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
      }}
    >
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
