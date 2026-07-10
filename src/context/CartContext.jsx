import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload || initialState;
    case "ADD": {
      const { product, qty = 1 } = action.payload;
      const existing = state.items.find((it) => it.id === product.id);
      if (existing) {
        return {
          items: state.items.map((it) =>
            it.id === product.id ? { ...it, qty: it.qty + qty } : it
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            imgId: product.imgId1,
            titleId: product.titleId,
            qty,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((it) => it.id !== action.payload.id) };
    case "SET_QTY": {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        return { items: state.items.filter((it) => it.id !== id) };
      }
      return {
        items: state.items.map((it) => (it.id === id ? { ...it, qty } : it)),
      };
    }
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "INIT", payload: parsed });
        }
      }
    } catch (e) {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }, [state, hydrated]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, it) => sum + it.qty, 0);
    const subtotal = state.items.reduce((sum, it) => sum + it.qty * it.price, 0);
    return {
      items: state.items,
      itemCount,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, qty = 1) => {
        dispatch({ type: "ADD", payload: { product, qty } });
        setIsOpen(true);
      },
      removeItem: (id) => dispatch({ type: "REMOVE", payload: { id } }),
      setQty: (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } }),
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
