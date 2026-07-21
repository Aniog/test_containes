import React, { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { items: Array.isArray(action.payload?.items) ? action.payload.items : [] };
    case "ADD": {
      const { id, variant, qty } = action;
      const existingIndex = state.items.findIndex(
        (it) => it.id === id && it.variant === variant
      );
      if (existingIndex >= 0) {
        const next = [...state.items];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + qty,
        };
        return { items: next };
      }
      return {
        items: [
          ...state.items,
          { id, variant, qty, addedAt: Date.now() },
        ],
      };
    }
    case "REMOVE": {
      const { id, variant } = action;
      return {
        items: state.items.filter(
          (it) => !(it.id === id && it.variant === variant)
        ),
      };
    }
    case "SET_QTY": {
      const { id, variant, qty } = action;
      if (qty <= 0) {
        return {
          items: state.items.filter(
            (it) => !(it.id === id && it.variant === variant)
          ),
        };
      }
      return {
        items: state.items.map((it) =>
          it.id === id && it.variant === variant ? { ...it, qty } : it
        ),
      };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    if (typeof window === "undefined") return init;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return init;
      const parsed = JSON.parse(raw);
      return { items: Array.isArray(parsed?.items) ? parsed.items : [] };
    } catch {
      return init;
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage errors
    }
  }, [state]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addToCart = useCallback((productId, { variant = "Gold", qty = 1, open = true } = {}) => {
    const product = getProductById(productId);
    if (!product) return;
    dispatch({ type: "ADD", id: productId, variant, qty });
    setLastAdded({ id: productId, variant, qty, name: product.name, addedAt: Date.now() });
    if (open) setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((productId, variant) => {
    dispatch({ type: "REMOVE", id: productId, variant });
  }, []);

  const setQuantity = useCallback((productId, variant, qty) => {
    dispatch({ type: "SET_QTY", id: productId, variant, qty });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const lines = useMemo(() => {
    return state.items
      .map((it) => {
        const product = getProductById(it.id);
        if (!product) return null;
        return {
          ...it,
          product,
          lineTotal: product.price * it.qty,
        };
      })
      .filter(Boolean);
  }, [state.items]);

  const subtotal = useMemo(
    () => lines.reduce((acc, l) => acc + l.lineTotal, 0),
    [lines]
  );

  const count = useMemo(
    () => state.items.reduce((acc, it) => acc + it.qty, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      lines,
      subtotal,
      count,
      isOpen,
      lastAdded,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }),
    [state.items, lines, subtotal, count, isOpen, lastAdded, addToCart, removeFromCart, setQuantity, clearCart, openCart, closeCart, toggleCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
