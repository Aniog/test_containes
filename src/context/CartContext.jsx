import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora_cart_v1";

function loadInitial() {
  if (typeof window === "undefined") return [];
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
    case "ADD": {
      const { product, variant, qty } = action;
      const key = `${product.id}-${variant}`;
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line,
        );
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          imageId: product.images[0]?.id,
          imageQ: product.images[0]?.q,
          qty,
        },
      ];
    }
    case "REMOVE":
      return state.filter((line) => line.key !== action.key);
    case "SET_QTY":
      return state.map((line) =>
        line.key === action.key
          ? { ...line, qty: Math.max(1, action.qty) }
          : line,
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore quota / privacy mode
    }
  }, [lines]);

  const addItem = useCallback((product, variant = "Gold", qty = 1) => {
    dispatch({ type: "ADD", product, variant, qty });
    setIsOpen(true);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key });
  }, []);

  const setQty = useCallback((key, qty) => {
    dispatch({ type: "SET_QTY", key, qty });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const totals = useMemo(() => {
    const itemCount = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
    return { itemCount, subtotal };
  }, [lines]);

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      addItem,
      removeItem,
      setQty,
      clear,
      totals,
      justAdded,
    }),
    [lines, isOpen, addItem, removeItem, setQty, clear, totals, justAdded],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
