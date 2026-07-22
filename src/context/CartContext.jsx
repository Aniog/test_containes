import { createContext, useContext, useReducer, useCallback, useEffect, useState } from 'react';

const CART_STORAGE_KEY = 'velmora-cart';

const CartContext = createContext(null);

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingIndex = state.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      );
      if (existingIndex >= 0) {
        const updated = [...state];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...state,
        {
          id: `${product.id}-${variant}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          variant,
          quantity,
          imageId: product.images[0]?.id,
        },
      ];
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((item) => item.id !== id);
      }
      return state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    }
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [], loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const cartTotal = state.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = state.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state,
        isCartOpen,
        setIsCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
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
