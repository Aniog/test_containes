import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'velmora-cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch { /* noop */ }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        next = state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        next = [
          ...state,
          {
            key,
            productId: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            image: product.images[0],
          },
        ];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      next = state.filter((i) => i.key !== action.payload);
      break;
    }
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        next = state.filter((i) => i.key !== key);
      } else {
        next = state.map((i) => (i.key === key ? { ...i, quantity } : i));
      }
      break;
    }
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
  const [items, dispatch] = useReducer(cartReducer, null, loadCart);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}
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
