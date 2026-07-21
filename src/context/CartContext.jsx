import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora-cart';

const loadCartFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { items: [], isOpen: false };
  } catch {
    return { items: [], isOpen: false };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity,
        };
        return { ...state, items: newItems, isOpen: true };
      }

      return {
        ...state,
        items: [...state.items, {
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        }],
        isOpen: true,
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };

    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((item) => item.productId !== productId) };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item
        ),
      };
    }

    case 'SET_OPEN':
      return { ...state, isOpen: action.payload };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } });
  }, []);

  const removeItem = useCallback((productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  }, []);

  const setCartOpen = useCallback((isOpen) => {
    dispatch({ type: 'SET_OPEN', payload: isOpen });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        setCartOpen,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}