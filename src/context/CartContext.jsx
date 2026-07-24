import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'velmora-cart';

const initialState = {
  items: [],
  isOpen: false
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.productId === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity
        };
        return { ...state, items: newItems };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            variant,
            quantity
          }
        ]
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

    case 'CLEAR_CART':
      return { ...state, items: [] };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'LOAD_CART':
      return { ...state, items: action.payload };

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
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          dispatch({ type: 'LOAD_CART', payload: parsed });
        }
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }, [state.items]);

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
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
    itemCount,
    subtotal
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
