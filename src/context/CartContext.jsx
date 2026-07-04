import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProductById } from "@/data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || { items: [] };
    case "add": {
      const { id, variant, qty } = action.payload;
      const key = `${id}::${variant}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i,
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { key, id, variant, qty }],
      };
    }
    case "updateQty": {
      const { key, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      };
    }
    case "remove": {
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) };
    }
    case "clear":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "hydrate", payload: parsed });
        }
      }
    } catch {
      // ignore — fresh cart
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist on change (post-hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage may be unavailable — fail silently
    }
  }, [state, hydrated]);

  const addToCart = useCallback((id, variant = "gold", qty = 1) => {
    dispatch({ type: "add", payload: { id, variant, qty } });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((key, qty) => {
    dispatch({ type: "updateQty", payload: { key, qty } });
  }, []);

  const remove = useCallback((key) => {
    dispatch({ type: "remove", payload: { key } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const lines = state.items
      .map((i) => {
        const product = getProductById(i.id);
        if (!product) return null;
        return {
          ...i,
          product,
          lineTotal: product.price * i.qty,
        };
      })
      .filter(Boolean);
    const itemCount = lines.reduce((acc, l) => acc + l.qty, 0);
    const subtotal = lines.reduce((acc, l) => acc + l.lineTotal, 0);
    return {
      items: lines,
      itemCount,
      subtotal,
      addToCart,
      updateQty,
      remove,
      clear,
      isOpen,
      openCart,
      closeCart,
    };
  }, [state, addToCart, updateQty, remove, clear, isOpen, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
