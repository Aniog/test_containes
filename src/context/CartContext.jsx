import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CART_STORAGE_KEY = 'velmora-cart';

const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // silently fail
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { productId, variant, quantity = 1 } = action.payload;
      const existingIndex = state.findIndex(
        (item) => item.productId === productId && item.variant === variant
      );
      if (existingIndex >= 0) {
        const updated = [...state];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [...state, { productId, variant, quantity }];
    }
    case 'REMOVE_ITEM': {
      return state.filter(
        (_, i) => i !== action.payload.index
      );
    }
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((_, i) => i !== index);
      }
      const updated = [...state];
      updated[index] = { ...updated[index], quantity };
      return updated;
    }
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addItem = useCallback((productId, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { productId, variant, quantity } });
  }, []);

  const removeItem = useCallback((index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { index } });
  }, []);

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = window.__VELMORA_PRODUCTS?.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart, itemCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
