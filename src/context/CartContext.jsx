import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || initialState;

    case "add": {
      const { product, tone, quantity } = action;
      const key = `${product.id}::${tone || "default"}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
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
            tone: tone || "gold",
            quantity,
            imageQuery: product.imageQuery,
            imageRatio: product.imageRatio || "4x5",
          },
        ],
      };
    }

    case "updateQty": {
      const { key, quantity } = action;
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.key !== key) };
      }
      return {
        items: state.items.map((i) =>
          i.key === key ? { ...i, quantity } : i,
        ),
      };
    }

    case "remove":
      return { items: state.items.filter((i) => i.key !== action.key) };

    case "clear":
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "hydrate", payload: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // Persist
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const addToCart = useCallback((product, opts = {}) => {
    const quantity = opts.quantity || 1;
    const tone = opts.tone || product.tones?.[0] || "gold";
    dispatch({ type: "add", product, tone, quantity });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((key, quantity) => {
    dispatch({ type: "updateQty", key, quantity });
  }, []);

  const removeFromCart = useCallback((key) => {
    dispatch({ type: "remove", key });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "clear" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = state.items.reduce(
      (n, i) => n + i.quantity * i.price,
      0,
    );
    return { itemCount, subtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      ...state,
      ...totals,
      isOpen,
      addToCart,
      updateQty,
      removeFromCart,
      clearCart,
      openCart,
      closeCart,
    }),
    [state, totals, isOpen, addToCart, updateQty, removeFromCart, clearCart, openCart, closeCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
