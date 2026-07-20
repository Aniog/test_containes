import React, { createContext, useContext, useReducer, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const variantName = typeof action.variant === 'string' ? action.variant : action.variant?.name;
      const existing = state.items.find(
        (i) => i.productId === action.product.id && i.variant === variantName
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.product.id && i.variant === variantName
              ? { ...i, quantity: i.quantity + action.quantity }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            cartItemId: `${action.product.id}-${variantName}-${Date.now()}`,
            productId: action.product.id,
            name: action.product.name,
            price: action.product.price,
            variant: variantName,
            quantity: action.quantity,
            imageId: action.product.images?.[0]?.id,
          },
        ],
      };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((i) => i.cartItemId !== action.cartItemId),
      };
    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.cartItemId === action.cartItemId
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: action.open ?? !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  const addToCart = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD', product, variant, quantity });
    dispatch({ type: 'TOGGLE_DRAWER', open: true });
  }, []);

  const removeFromCart = useCallback((cartItemId) => {
    dispatch({ type: 'REMOVE', cartItemId });
  }, []);

  const updateQuantity = useCallback((cartItemId, quantity) => {
    dispatch({ type: 'UPDATE_QTY', cartItemId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const toggleCart = useCallback((open) => {
    dispatch({ type: 'TOGGLE_DRAWER', open });
  }, []);

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      totalItems,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleCart,
    }),
    [state.items, state.isOpen, totalItems, subtotal, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
