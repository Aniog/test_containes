import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);
const UIContext = createContext(null);

// ---------------------------------------------------------------------------
// Cart state — persisted to localStorage so a refresh doesn't lose items.
// Items: { id, name, price, tone, imageId, imageQuery, qty, category }
// ---------------------------------------------------------------------------
const STORAGE_KEY = "velmora.cart.v1";

function readInitial() {
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
    /* ignore quota errors */
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, tone, qty = 1 } = action.payload;
      const key = `${product.id}__${tone}`;
      const idx = state.findIndex((l) => l.key === key);
      if (idx >= 0) {
        const next = state.slice();
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      const image = product.images?.[0];
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          tagline: product.tagline,
          price: product.price,
          tone,
          category: product.category,
          imageId: image?.id,
          imageQuery: image?.query,
          qty,
        },
      ];
    }
    case "REMOVE":
      return state.filter((l) => l.key !== action.payload.key);
    case "SET_QTY": {
      const { key, qty } = action.payload;
      if (qty <= 0) return state.filter((l) => l.key !== key);
      return state.map((l) => (l.key === key ? { ...l, qty } : l));
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], readInitial);

  useEffect(() => {
    writeStorage(items);
  }, [items]);

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, l) => sum + l.price * l.qty, 0);
    const count = items.reduce((sum, l) => sum + l.qty, 0);
    const freeShippingThreshold = 80;
    const progress = Math.min(1, subtotal / freeShippingThreshold);
    return {
      items,
      subtotal,
      count,
      progress,
      freeShippingThreshold,
      add: (product, opts = {}) => dispatch({ type: "ADD", payload: { product, tone: opts.tone || product.tone, qty: opts.qty || 1 } }),
      remove: (key) => dispatch({ type: "REMOVE", payload: { key } }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", payload: { key, qty } }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

// ---------------------------------------------------------------------------
// UI state — drawer / search overlay / mobile menu / toast
// ---------------------------------------------------------------------------
export function UIProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    const next = { id: Date.now(), message };
    setToast(next);
    // Auto-dismiss
    setTimeout(() => {
      setToast((current) => (current && current.id === next.id ? null : current));
    }, 3200);
  };

  // Lock body scroll while drawer or overlay open
  useEffect(() => {
    const lock = cartOpen || searchOpen || menuOpen;
    const prev = document.body.style.overflow;
    if (lock) document.body.style.overflow = "hidden";
    else document.body.style.overflow = prev || "";
    return () => { document.body.style.overflow = prev || ""; };
  }, [cartOpen, searchOpen, menuOpen]);

  // Esc closes overlays
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (cartOpen) setCartOpen(false);
      else if (searchOpen) setSearchOpen(false);
      else if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, searchOpen, menuOpen]);

  const value = useMemo(() => ({
    cartOpen, setCartOpen,
    searchOpen, setSearchOpen,
    menuOpen, setMenuOpen,
    toast, showToast,
  }), [cartOpen, searchOpen, menuOpen, toast]);

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
