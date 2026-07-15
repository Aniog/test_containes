import { createContext, useContext, useReducer, useCallback, useRef, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora-cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // silently fail
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.product.id && item.variant === action.variant
      );
      if (existing) {
        return state.map((item) =>
          item.id === existing.id && item.variant === existing.variant
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      }
      return [
        ...state,
        {
          id: action.product.id,
          name: action.product.name,
          price: action.product.price,
          variant: action.variant,
          quantity: action.quantity,
          image: action.product.images[0],
        },
      ];
    }

    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      );

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );

    case 'CLEAR':
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);
  const itemsRef = useRef(items);

  // Keep ref in sync with latest state
  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  // Persist to localStorage whenever items change
  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = useCallback(
    (product, variant = 'gold', quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', product, variant, quantity });
    },
    []
  );

  const removeItem = useCallback(
    (id, variant = 'gold') => {
      dispatch({ type: 'REMOVE_ITEM', id, variant });
    },
    []
  );

  const updateQuantity = useCallback(
    (id, variant = 'gold', quantity) => {
      dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
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