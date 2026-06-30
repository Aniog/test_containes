import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora_cart';

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // ignore
  }
  return [];
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function cartReducer(state, action) {
  let next;
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant } = action;
      const key = `${product.id}_${variant}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        next = state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + 1 } : i
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
            image: product.images[0],
            imageRatio: product.imageRatio,
            imageWidth: product.imageWidth,
            quantity: 1,
          },
        ];
      }
      break;
    }
    case 'REMOVE_ITEM': {
      next = state.filter((i) => i.key !== action.key);
      break;
    }
    case 'UPDATE_QUANTITY': {
      if (action.quantity < 1) {
        next = state.filter((i) => i.key !== action.key);
      } else {
        next = state.map((i) =>
          i.key === action.key ? { ...i, quantity: action.quantity } : i
        );
      }
      break;
    }
    case 'CLEAR_CART': {
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
  const [cart, dispatch] = useReducer(cartReducer, null, loadCart);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addItem = useCallback((product, variant) => {
    dispatch({ type: 'ADD_ITEM', product, variant });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', key });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', key, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const value = React.useMemo(
    () => ({ cart, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal }),
    [cart, addItem, removeItem, updateQuantity, clearCart, itemCount, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
