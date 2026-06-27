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

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload && Array.isArray(action.payload.items)
        ? action.payload
        : state;

    case "ADD": {
      const { id, variantId, qty = 1 } = action;
      const existing = state.items.find(
        (line) => line.id === id && line.variantId === variantId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((line) =>
            line === existing ? { ...line, qty: line.qty + qty } : line
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { id, variantId, qty }],
      };
    }

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (line) =>
            !(line.id === action.id && line.variantId === action.variantId)
        ),
      };

    case "SET_QTY": {
      const nextQty = Math.max(1, Math.min(99, action.qty));
      return {
        ...state,
        items: state.items.map((line) =>
          line.id === action.id && line.variantId === action.variantId
            ? { ...line, qty: nextQty }
            : line
        ),
      };
    }

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage on every change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state, hydrated]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [drawerOpen]);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setDrawerOpen((v) => !v), []);

  const addItem = useCallback((id, variantId, qty = 1) => {
    dispatch({ type: "ADD", id, variantId, qty });
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((id, variantId) => {
    dispatch({ type: "REMOVE", id, variantId });
  }, []);

  const setQty = useCallback((id, variantId, qty) => {
    dispatch({ type: "SET_QTY", id, variantId, qty });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const itemCount = useMemo(
    () => state.items.reduce((sum, line) => sum + line.qty, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      itemCount,
      drawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      addItem,
      removeItem,
      setQty,
      clear,
    }),
    [
      state.items,
      itemCount,
      drawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      addItem,
      removeItem,
      setQty,
      clear,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}