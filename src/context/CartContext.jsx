import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'velmora_cart_v1';

function lineKey(productId, variant) {
  return `${productId}::${variant || 'default'}`;
}

function loadInitial() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, quantity } = action;
      const key = lineKey(product.id, variant);
      const existing = state.find((l) => l.key === key);
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant: variant || product.variants?.[0] || 'Gold',
          imgId: product.imgId,
          imgQuery: product.imgQuery,
          quantity,
        },
      ];
    }
    case 'REMOVE':
      return state.filter((l) => l.key !== action.key);
    case 'SET_QTY':
      return state
        .map((l) => (l.key === action.key ? { ...l, quantity: action.quantity } : l))
        .filter((l) => l.quantity > 0);
    case 'CLEAR':
      return [];
    case 'HYDRATE':
      return action.lines || [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [], loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore storage errors */
    }
  }, [lines]);

  const addItem = useCallback((product, { variant, quantity = 1, openDrawer = true } = {}) => {
    dispatch({ type: 'ADD', product, variant, quantity });
    if (openDrawer) setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => dispatch({ type: 'REMOVE', key }), []);
  const setQuantity = useCallback(
    (key, quantity) => dispatch({ type: 'SET_QTY', key, quantity }),
    []
  );
  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity * l.price, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
    }),
    [lines, itemCount, subtotal, isOpen, addItem, removeItem, setQuantity, clear, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside a CartProvider');
  return ctx;
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}
