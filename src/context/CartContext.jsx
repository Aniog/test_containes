import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

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
      const { id, variant, qty = 1 } = action;
      const idx = state.findIndex(
        (item) => item.id === id && item.variant === variant
      );
      if (idx >= 0) {
        const next = [...state];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...state, { id, variant, qty }];
    }
    case "REMOVE": {
      const { id, variant } = action;
      return state.filter((i) => !(i.id === id && i.variant === variant));
    }
    case "SET_QTY": {
      const { id, variant, qty } = action;
      if (qty <= 0) {
        return state.filter((i) => !(i.id === id && i.variant === variant));
      }
      return state.map((i) =>
        i.id === id && i.variant === variant ? { ...i, qty } : i
      );
    }
    case "CLEAR":
      return [];
    case "INIT":
      return action.payload || [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(0);

  // Hydrate from localStorage
  useEffect(() => {
    dispatch({ type: "INIT", payload: readInitial() });
  }, []);

  // Persist
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const enriched = useMemo(
    () =>
      items
        .map((it) => {
          const product = getProductById(it.id);
          if (!product) return null;
          return {
            ...it,
            product,
            lineTotal: product.price * it.qty,
          };
        })
        .filter(Boolean),
    [items]
  );

  const subtotal = useMemo(
    () => enriched.reduce((sum, it) => sum + it.lineTotal, 0),
    [enriched]
  );
  const itemCount = useMemo(
    () => enriched.reduce((sum, it) => sum + it.qty, 0),
    [enriched]
  );

  const value = {
    items: enriched,
    rawItems: items,
    subtotal,
    itemCount,
    open,
    setOpen,
    bump,
    add: (id, variant, qty = 1) => {
      dispatch({ type: "ADD", id, variant, qty });
      setBump((b) => b + 1);
      setOpen(true);
    },
    remove: (id, variant) => dispatch({ type: "REMOVE", id, variant }),
    setQty: (id, variant, qty) =>
      dispatch({ type: "SET_QTY", id, variant, qty }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
