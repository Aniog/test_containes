import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart-v1";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, tone, qty } = action;
      const key = `${id}::${tone}`;
      const existing = state.items[key];
      const items = {
        ...state.items,
        [key]: {
          id,
          tone,
          qty: (existing?.qty || 0) + qty,
        },
      };
      return { ...state, items };
    }
    case "REMOVE": {
      const items = { ...state.items };
      delete items[action.key];
      return { ...state, items };
    }
    case "SET_QTY": {
      const { key, qty } = action;
      if (qty <= 0) {
        const items = { ...state.items };
        delete items[key];
        return { ...state, items };
      }
      return {
        ...state,
        items: { ...state.items, [key]: { ...state.items[key], qty } },
      };
    }
    case "CLEAR":
      return { ...state, items: {} };
    default:
      return state;
  }
}

const initialState = { items: {} };

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return initialState;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  // Lock body scroll when the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const value = useMemo(() => {
    const lines = Object.entries(state.items).map(([key, line]) => {
      const product = getProduct(line.id);
      return {
        key,
        ...line,
        product,
        lineTotal: (product?.price || 0) * line.qty,
      };
    });
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);

    return {
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (id, tone = "gold", qty = 1) => {
        dispatch({ type: "ADD", id, tone, qty });
        setIsOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
