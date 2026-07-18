import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

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
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        next = state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
      } else {
        next = [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
      break;
    }
    case 'REMOVE_ITEM':
      next = state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
      break;
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        next = state.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        );
      } else {
        next = state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
      break;
    case 'CLEAR_CART':
      next = [];
      break;
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, null, loadCart);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addItem = (product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, variant, quantity, image: product.images[0] },
    });
  };

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  };

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ cart, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
