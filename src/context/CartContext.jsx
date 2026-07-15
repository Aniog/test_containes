import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (items) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items));
  } catch {
    // ignore
  }
};

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.product.id && item.variant === action.variant
      );
      if (existing) {
        next = state.map((item) =>
          item.id === action.product.id && item.variant === action.variant
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        next = [
          ...state,
          {
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            image: action.product.images[0],
            variant: action.variant,
            quantity: action.quantity,
          },
        ];
      }
      saveCart(next);
      return next;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      );
      saveCart(next);
      return next;
    case 'UPDATE_QUANTITY':
      next = state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      );
      saveCart(next);
      return next;
    case 'CLEAR_CART':
      saveCart([]);
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  const addItem = useCallback((product, variant = '18K Gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, variant, quantity });
  }, []);

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', id, variant });
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
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