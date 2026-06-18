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
const STORAGE_KEY = 'velmora.cart.v1';

function loadInitial() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { product, variantId, quantity } = action;
      const key = `${product.id}__${variantId}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variantId,
          variantLabel:
            product.variants.find((v) => v.id === variantId)?.label ||
            product.variants[0].label,
          imgId: product.imgPrimaryId,
          imgQuery: product.imgQueryPrimary,
          quantity,
        },
      ];
    }
    case 'remove':
      return state.filter((i) => i.key !== action.key);
    case 'setQuantity':
      return state
        .map((i) =>
          i.key === action.key
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i,
        )
        .filter((i) => i.quantity > 0);
    case 'clear':
      return [];
    case 'hydrate':
      return Array.isArray(action.items) ? action.items : [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const addItem = useCallback(
    (product, { variantId, quantity = 1, openDrawer = true } = {}) => {
      const finalVariant = variantId || product.variants[0]?.id;
      dispatch({
        type: 'add',
        product,
        variantId: finalVariant,
        quantity,
      });
      if (openDrawer) setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback((key) => {
    dispatch({ type: 'remove', key });
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'setQuantity', key, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: 'clear' }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
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
    [
      items,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}

export function formatPrice(value) {
  const v = Number(value || 0);
  return `$${v.toFixed(0)}`;
}
