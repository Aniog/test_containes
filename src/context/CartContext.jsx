import React, { createContext, useContext, useReducer, useCallback, useMemo, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

const initialState = {
  items: [],
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items || [] };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "ADD": {
      const { item } = action;
      const key = `${item.id}__${item.variant || "default"}`;
      const existing = state.items.find((i) => i.key === key);
      const nextItems = existing
        ? state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + (item.qty || 1) } : i
          )
        : [
            ...state.items,
            {
              key,
              id: item.id,
              name: item.name,
              price: item.price,
              variant: item.variant || "Gold",
              imageId: item.imageId,
              imageQuery: item.imageQuery,
              qty: item.qty || 1,
            },
          ];
      return { ...state, items: nextItems, isOpen: true };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.key),
      };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.key === action.key ? { ...i, qty: Math.max(1, action.qty) } : i
          ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const items = JSON.parse(raw);
        if (Array.isArray(items)) {
          dispatch({ type: "HYDRATE", items });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const addItem = useCallback((item) => dispatch({ type: "ADD", item }), []);
  const removeItem = useCallback((key) => dispatch({ type: "REMOVE", key }), []);
  const updateQty = useCallback(
    (key, qty) => dispatch({ type: "UPDATE_QTY", key, qty }),
    []
  );
  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const open = useCallback(() => dispatch({ type: "OPEN" }), []);
  const close = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggle = useCallback(() => dispatch({ type: "TOGGLE" }), []);

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );
  const totalQty = useMemo(
    () => state.items.reduce((n, i) => n + i.qty, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      totalQty,
      addItem,
      removeItem,
      updateQty,
      clear,
      open,
      close,
      toggle,
    }),
    [state, subtotal, totalQty, addItem, removeItem, updateQty, clear, open, close, toggle]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
