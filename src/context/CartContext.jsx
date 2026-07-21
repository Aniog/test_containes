import React, { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react";
import { toast } from "sonner";
import { formatPrice } from "@/data/products.js";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = { items: [] }; // items: [{ id, slug, name, price, qty, tone, imgId }]

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { items: Array.isArray(action.payload?.items) ? action.payload.items : [] };
    case "ADD": {
      const { id, qty = 1, tone = null } = action.payload;
      const existing = state.items.find(
        (it) => it.id === id && (it.tone || null) === (tone || null)
      );
      if (existing) {
        return {
          items: state.items.map((it) =>
            it === existing ? { ...it, qty: it.qty + qty } : it
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, qty }] };
    }
    case "REMOVE":
      return { items: state.items.filter((it) => it.key !== action.payload.key) };
    case "SET_QTY":
      return {
        items: state.items
          .map((it) =>
            it.key === action.payload.key
              ? { ...it, qty: Math.max(0, action.payload.qty) }
              : it
          )
          .filter((it) => it.qty > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    if (typeof window === "undefined") return initialState;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return initialState;
      const parsed = JSON.parse(raw);
      return { items: Array.isArray(parsed?.items) ? parsed.items : [] };
    } catch {
      return initialState;
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch {
      /* ignore quota errors */
    }
  }, [state.items]);

  const addItem = useCallback((product, { qty = 1, tone = null } = {}) => {
    const item = {
      key: `${product.id}__${tone || "default"}`,
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      qty,
      tone,
      imgId: product.imgId,
    };
    dispatch({ type: "ADD", payload: item });
    setIsOpen(true);
    toast.success(`${product.name} added to your bag`);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } });
  }, []);

  const setQty = useCallback((key, qty) => {
    dispatch({ type: "SET_QTY", payload: { key, qty } });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const summary = useMemo(() => {
    const count = state.items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = state.items.reduce((acc, it) => acc + it.qty * it.price, 0);
    return { count, subtotal, formattedSubtotal: formatPrice(subtotal) };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addItem,
      removeItem,
      setQty,
      clear,
      isOpen,
      openCart,
      closeCart,
      ...summary,
    }),
    [state.items, addItem, removeItem, setQty, clear, isOpen, openCart, closeCart, summary]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
