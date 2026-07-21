import { createContext, useContext, useMemo, useReducer, useState, useCallback } from 'react';

const CartContext = createContext(null);

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, quantity } = action;
      const key = `${product.id}::${variant || 'default'}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            imgId: product.imgId,
            imgQuery: product.imgQuery,
            variant: variant || product.variants?.[0] || 'Gold',
            quantity,
          },
        ],
      };
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.key !== action.key) };
    case 'UPDATE_QTY':
      return {
        items: state.items
          .map((i) => (i.key === action.key ? { ...i, quantity: action.quantity } : i))
          .filter((i) => i.quantity > 0),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isOpen, setOpen] = useState(false);

  const addToCart = useCallback((product, { variant, quantity = 1 } = {}) => {
    dispatch({ type: 'ADD', product, variant, quantity });
    setOpen(true);
  }, []);

  const removeFromCart = useCallback((key) => {
    dispatch({ type: 'REMOVE', key });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QTY', key, quantity });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const openCart = useCallback(() => setOpen(true), []);
  const closeCart = useCallback(() => setOpen(false), []);

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [state.items]
  );

  const itemCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    subtotal,
    itemCount,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
