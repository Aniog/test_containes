import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { findProduct } from "@/data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload && Array.isArray(action.payload.items)
        ? action.payload
        : state;

    case "ADD": {
      const { id, qty = 1, tone, image } = action;
      const idx = state.items.findIndex(
        (i) => i.id === id && (i.tone || "gold") === (tone || "gold"),
      );
      if (idx >= 0) {
        const items = state.items.slice();
        items[idx] = {
          ...items[idx],
          qty: items[idx].qty + qty,
          image: image || items[idx].image,
        };
        return { ...state, items };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { id, qty, tone: tone || "gold", image: image || null },
        ],
      };
    }

    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && (i.tone || "gold") === (action.tone || "gold")),
        ),
      };
    }

    case "SET_QTY": {
      const items = state.items
        .map((i) =>
          i.id === action.id && (i.tone || "gold") === (action.tone || "gold")
            ? { ...i, qty: Math.max(0, action.qty) }
            : i,
        )
        .filter((i) => i.qty > 0);
      return { ...state, items };
    }

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return initialState;
    return parsed;
  } catch {
    return initialState;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage exactly once
  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: readStorage() });
    setHydrated(true);
  }, []);

  // Persist on change (only after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota / private mode errors */
    }
  }, [state, hydrated]);

  // Multi-tab sync
  useEffect(() => {
    function onStorage(e) {
      if (e.key !== STORAGE_KEY) return;
      try {
        const parsed = JSON.parse(e.newValue);
        if (parsed) dispatch({ type: "HYDRATE", payload: parsed });
      } catch { /* noop */ }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback((id, qty = 1, tone = "gold", image = null) => {
    dispatch({ type: "ADD", id, qty, tone, image });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id, tone) => {
    dispatch({ type: "REMOVE", id, tone });
  }, []);

  const setQty = useCallback((id, qty, tone) => {
    dispatch({ type: "SET_QTY", id, qty, tone });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const openCart  = useCallback(() => setIsOpen(true),  []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  // Derived: enrich items with product data + totals
  const enrichedItems = useMemo(() => {
    return state.items
      .map((i) => {
        const product = findProduct(i.id);
        if (!product) return null;
        return {
          ...i,
          product,
          lineTotal: product.price * i.qty,
        };
      })
      .filter(Boolean);
  }, [state.items]);

  const subtotal = useMemo(
    () => enrichedItems.reduce((sum, i) => sum + i.lineTotal, 0),
    [enrichedItems],
  );
  const itemCount = useMemo(
    () => enrichedItems.reduce((sum, i) => sum + i.qty, 0),
    [enrichedItems],
  );

  const value = {
    items: enrichedItems,
    rawItems: state.items,
    subtotal,
    itemCount,
    addItem,
    removeItem,
    setQty,
    clear,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
