import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.product.id && item.variant === action.variant
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id && item.variant === action.variant
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
          imgId: action.product.imgId,
        },
      ];
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      );
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.id && item.variant === action.variant)
        );
      }
      return state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: action.quantity }
          : item
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify(items));
    } catch {
      // storage full or unavailable
    }
  }, [items]);

  const addItem = useCallback(
    (product, variant = 'gold', quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', product, variant, quantity });
    },
    []
  );

  const removeItem = useCallback(
    (id, variant) => {
      dispatch({ type: 'REMOVE_ITEM', id, variant });
    },
    []
  );

  const updateQuantity = useCallback(
    (id, variant, quantity) => {
      dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}