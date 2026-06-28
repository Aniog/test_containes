import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora-cart-v1';

const loadInitial = () => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, quantity } = action;
      const key = `${product.id}::${variant}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
          imgQueryPrimary: product.imgQueryPrimary,
        },
      ];
    }
    case 'REMOVE':
      return state.filter((i) => i.key !== action.key);
    case 'UPDATE_QTY':
      return state
        .map((i) => (i.key === action.key ? { ...i, quantity: action.quantity } : i))
        .filter((i) => i.quantity > 0);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore storage errors */
    }
  }, [items]);

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, variant = 'Gold', quantity = 1) => {
        dispatch({ type: 'ADD', product, variant, quantity });
        setIsOpen(true);
      },
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      updateQty: (key, quantity) => dispatch({ type: 'UPDATE_QTY', key, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
