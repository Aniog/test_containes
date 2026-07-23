import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = {
  items: [], // { id, name, price, tone, qty, image, imageId, imageQuery }
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, tone, qty } = action.payload;
      const toneId = tone?.id || "default";
      const key = `${product.id}::${toneId}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            tone: tone?.label || null,
            toneId,
            image: product.images?.[0] || null,
            imageId: product.imageId,
            qty,
          },
        ],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload.key),
      };
    }
    case "UPDATE_QTY": {
      const { key, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch (e) {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  // Persist on change
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // ignore quota errors
    }
  }, [state, hydrated]);

  const addItem = useCallback((product, tone, qty = 1) => {
    dispatch({ type: "ADD", payload: { product, tone, qty } });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } });
  }, []);

  const updateQty = useCallback((key, qty) => {
    dispatch({ type: "UPDATE_QTY", payload: { key, qty } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const totals = useMemo(() => {
    const count = state.items.reduce((acc, i) => acc + i.qty, 0);
    const subtotal = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    return { count, subtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addItem,
      removeItem,
      updateQty,
      clear,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      totals,
    }),
    [state.items, addItem, removeItem, updateQty, clear, isOpen, openCart, closeCart, toggleCart, totals]
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
