import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const CART_KEY = 'velmora-cart';

function loadCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.productId === action.productId && item.variantId === action.variantId
      );
      if (existing) {
        next = state.map((item) =>
          item.productId === action.productId && item.variantId === action.variantId
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      } else {
        next = [...state, { productId: action.productId, variantId: action.variantId, quantity: action.quantity }];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      next = state.filter(
        (item) => !(item.productId === action.productId && item.variantId === action.variantId)
      );
      break;
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        next = state.filter(
          (item) => !(item.productId === action.productId && item.variantId === action.variantId)
        );
      } else {
        next = state.map((item) =>
          item.productId === action.productId && item.variantId === action.variantId
            ? { ...item, quantity: action.quantity }
            : item
        );
      }
      break;
    }
    case 'CLEAR': {
      next = [];
      break;
    }
    default:
      return state;
  }
  saveCart(next);
  return next;
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = (productId, variantId, quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', productId, variantId, quantity });
  const removeItem = (productId, variantId) =>
    dispatch({ type: 'REMOVE_ITEM', productId, variantId });
  const updateQuantity = (productId, variantId, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', productId, variantId, quantity });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, itemCount, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
