import React, { createContext, useContext, useEffect, useReducer, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

function readStorage() {
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

function writeStorage(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, quantity = 1, tone } = action;
      const lineId = `${product.id}__${tone || product.tone?.[0] || "default"}`;
      const existing = state.find((it) => it.lineId === lineId);
      if (existing) {
        return state.map((it) =>
          it.lineId === lineId
            ? { ...it, quantity: Math.min(it.quantity + quantity, 10) }
            : it
        );
      }
      return [
        ...state,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          art: product.art,
          tone: tone || product.tone?.[0] || "Gold",
          quantity: Math.max(1, Math.min(quantity, 10)),
        },
      ];
    }
    case "REMOVE":
      return state.filter((it) => it.lineId !== action.lineId);
    case "SET_QTY": {
      const qty = Math.max(0, Math.min(action.quantity, 10));
      if (qty === 0) return state.filter((it) => it.lineId !== action.lineId);
      return state.map((it) =>
        it.lineId === action.lineId ? { ...it, quantity: qty } : it
      );
    }
    case "CLEAR":
      return [];
    case "HYDRATE":
      return action.items || [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    dispatch({ type: "HYDRATE", items: readStorage() });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeStorage(items);
  }, [items, hydrated]);

  const addToCart = useCallback((product, opts = {}) => {
    dispatch({
      type: "ADD",
      product,
      quantity: opts.quantity || 1,
      tone: opts.tone,
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId });
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QTY", lineId, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = items.reduce((sum, it) => sum + it.quantity, 0);
  const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        setQuantity,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
