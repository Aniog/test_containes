import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora_cart';

const initialState = {
  items: [],
  isOpen: false,
};

function loadCartFromStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...initialState, items: parsed };
    }
  } catch (error) {
    console.error('Failed to load cart from storage:', error);
  }
  return initialState;
}

function saveCartToStorage(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart to storage:', error);
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1, variant = 'gold' } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.product.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity,
        };
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [...state.items, { product, quantity, variant }],
      };
    }

    case 'REMOVE_ITEM': {
      const { productId, variant } = action.payload;
      return {
        ...state,
        items: state.items.filter(
          item => !(item.product.id === productId && item.variant === variant)
        ),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, variant, quantity } = action.payload;
      if (quantity <= 0) {
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

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, loadCartFromStorage);

  // Persist to localStorage on changes
  useEffect(() => {
    saveCartToStorage(state.items);
  }, [state.items]);

  const addItem = (product, quantity = 1, variant = 'gold') => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity, variant } });
    dispatch({ type: 'OPEN_CART' });
  };

  const removeItem = (productId, variant = 'gold') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } });
  };

  const updateQuantity = (productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } });
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
    (sum, item) => sum + item.product.price * item.quantity,
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
