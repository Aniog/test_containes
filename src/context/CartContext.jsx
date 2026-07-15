import React, { createContext, useContext, useMemo, useReducer, useState, useCallback } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, qty = 1, variant = "default" } = action.payload;
      const key = `${id}__${variant}`;
      const existing = state.items.find((it) => it.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((it) =>
            it.key === key ? { ...it, qty: it.qty + qty } : it
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { key, id, qty, variant }],
      };
    }
    case "REMOVE": {
      return { ...state, items: state.items.filter((it) => it.key !== action.payload.key) };
    }
    case "SET_QTY": {
      const { key, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((it) => it.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((it) => (it.key === key ? { ...it, qty } : it)),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const addItem = useCallback(
    (item) => {
      dispatch({ type: "ADD", payload: item });
      setDrawerOpen(true);
    },
    []
  );

  const removeItem = useCallback((key) => dispatch({ type: "REMOVE", payload: { key } }), []);
  const setQty = useCallback(
    (key, qty) => dispatch({ type: "SET_QTY", payload: { key, qty } }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, it) => sum + it.qty, 0);
    return {
      items: state.items,
      count,
      addItem,
      removeItem,
      setQty,
      clearCart,
      drawerOpen,
      openDrawer,
      closeDrawer,
    };
  }, [state, addItem, removeItem, setQty, clearCart, drawerOpen, openDrawer, closeDrawer]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
