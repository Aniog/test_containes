import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { findProduct } from "@/data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload && Array.isArray(action.payload.items)
        ? { items: action.payload.items }
        : state;
    case "add": {
      const { slug, variantId, qty } = action.payload;
      const existingIdx = state.items.findIndex(
        (i) => i.slug === slug && i.variantId === variantId
      );
      if (existingIdx >= 0) {
        const next = [...state.items];
        next[existingIdx] = { ...next[existingIdx], qty: next[existingIdx].qty + qty };
        return { items: next };
      }
      return { items: [...state.items, { slug, variantId, qty }] };
    }
    case "updateQty": {
      const { slug, variantId, qty } = action.payload;
      if (qty <= 0) {
        return {
          items: state.items.filter(
            (i) => !(i.slug === slug && i.variantId === variantId)
          ),
        };
      }
      return {
        items: state.items.map((i) =>
          i.slug === slug && i.variantId === variantId ? { ...i, qty } : i
        ),
      };
    }
    case "remove": {
      const { slug, variantId } = action.payload;
      return {
        items: state.items.filter(
          (i) => !(i.slug === slug && i.variantId === variantId)
        ),
      };
    }
    case "clear":
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
      return raw ? { items: JSON.parse(raw).items || [] } : initialState;
    } catch {
      return initialState;
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items })
      );
    } catch {
      /* ignore quota errors */
    }
  }, [state.items]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((slug, variantId = "gold", qty = 1) => {
    dispatch({ type: "add", payload: { slug, variantId, qty } });
    setIsOpen(true);
  }, []);

  const updateQty = useCallback((slug, variantId, qty) => {
    dispatch({ type: "updateQty", payload: { slug, variantId, qty } });
  }, []);

  const removeItem = useCallback((slug, variantId) => {
    dispatch({ type: "remove", payload: { slug, variantId } });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const value = useMemo(() => {
    const detailed = state.items
      .map((i) => {
        const product = findProduct(i.slug);
        if (!product) return null;
        return {
          ...i,
          product,
          lineTotal: product.price * i.qty,
        };
      })
      .filter(Boolean);
    const itemCount = detailed.reduce((n, i) => n + i.qty, 0);
    const subtotal = detailed.reduce((n, i) => n + i.lineTotal, 0);
    return {
      items: detailed,
      rawItems: state.items,
      itemCount,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQty,
      removeItem,
      clear,
    };
  }, [state.items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
