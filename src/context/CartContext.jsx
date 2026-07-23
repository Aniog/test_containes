import { createContext, useContext, useMemo, useReducer, useState } from 'react';

const CartContext = createContext(null);

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const key = `${action.product.id}__${action.variant}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key
              ? { ...i, qty: Math.min(i.qty + action.qty, 99) }
              : i,
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: action.product.id,
            name: action.product.name,
            price: action.product.price,
            variant: action.variant,
            qty: action.qty,
            imgId: action.product.imgId,
          },
        ],
      };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case 'SET_QTY': {
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== action.key) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, qty: Math.min(action.qty, 99) } : i,
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return {
      items: state.items,
      count,
      subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem: (product, variant = 'Gold', qty = 1) => {
        dispatch({ type: 'ADD', product, variant, qty });
        setIsCartOpen(true);
      },
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      setQty: (key, qty) => dispatch({ type: 'SET_QTY', key, qty }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    };
  }, [state, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export { PLACEHOLDER_IMG };
