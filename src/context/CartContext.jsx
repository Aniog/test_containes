import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function readInitial() {
  if (typeof window === "undefined") return [];
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
    case "ADD": {
      const { id, color, size, qty = 1 } = action.payload;
      const idx = state.findIndex(
        (l) => l.id === id && l.color === color && l.size === size
      );
      if (idx >= 0) {
        const next = [...state];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...state, { id, color, size, qty }];
    }
    case "REMOVE": {
      const { id, color, size } = action.payload;
      return state.filter(
        (l) => !(l.id === id && l.color === color && l.size === size)
      );
    }
    case "SET_QTY": {
      const { id, color, size, qty } = action.payload;
      if (qty <= 0) {
        return state.filter(
          (l) => !(l.id === id && l.color === color && l.size === size)
        );
      }
      return state.map((l) =>
        l.id === id && l.color === color && l.size === size ? { ...l, qty } : l
      );
    }
    case "CLEAR":
      return [];
    case "HYDRATE":
      return action.payload || [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / private mode */
    }
  }, [items]);

  const lineItems = useMemo(() => {
    return items
      .map((line) => {
        const product = getProductById(line.id);
        if (!product) return null;
        return {
          ...line,
          product,
          lineTotal: product.price * line.qty,
        };
      })
      .filter(Boolean);
  }, [items]);

  const subtotal = useMemo(
    () => lineItems.reduce((sum, l) => sum + l.lineTotal, 0),
    [lineItems]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, l) => sum + l.qty, 0),
    [items]
  );

  const api = useMemo(
    () => ({
      items,
      lineItems,
      subtotal,
      itemCount,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      add: (payload) => {
        dispatch({ type: "ADD", payload });
        setIsOpen(true);
      },
      remove: (payload) => dispatch({ type: "REMOVE", payload }),
      setQty: (payload) => dispatch({ type: "SET_QTY", payload }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [items, lineItems, subtotal, itemCount, isOpen]
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
