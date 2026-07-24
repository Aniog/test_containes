import React, { createContext, useContext, useMemo, useReducer, useCallback, useState, useEffect } from "react";

const STORAGE_KEY = "velmora-cart-v1";

const CartContext = createContext(null);

const initialState = { items: [] };

function loadInitial() {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.items)) return parsed;
  } catch (_) {
    /* ignore */
  }
  return initialState;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}::${variant || "default"}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            accent: product.accent,
            variant: variant || null,
            quantity,
          },
        ],
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.key !== action.payload.key) };
    case "SET_QTY":
      return {
        items: state.items
          .map((i) =>
            i.key === action.payload.key
              ? { ...i, quantity: Math.max(1, action.payload.quantity) }
              : i
          ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      /* ignore */
    }
  }, [state]);

  const addToCart = useCallback((product, opts = {}) => {
    dispatch({
      type: "ADD",
      payload: { product, variant: opts.variant, quantity: opts.quantity || 1 },
    });
    setJustAdded(product.name);
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } });
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", payload: { key, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 80 ? 0 : 8;
    const total = subtotal + shipping;
    return { subtotal, itemCount, shipping, total };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
      justAdded,
      setJustAdded,
      ...totals,
    }),
    [state.items, addToCart, removeFromCart, setQuantity, clearCart, isOpen, openCart, closeCart, justAdded, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
