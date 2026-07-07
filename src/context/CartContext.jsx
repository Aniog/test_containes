import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora:cart";

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

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity = 1 } = action;
      const key = `${product.id}::${variant || "default"}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          variant: variant || null,
          quantity,
        },
      ];
    }
    case "REMOVE": {
      return state.filter((i) => i.key !== action.key);
    }
    case "SET_QTY": {
      return state
        .map((i) =>
          i.key === action.key
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i,
        );
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], readInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0,
    );
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    return { subtotal, count };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      ...summary,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem: (product, variant, quantity = 1) => {
        dispatch({ type: "ADD", product, variant, quantity });
        setIsOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "SET_QTY", key, quantity }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items, summary, isOpen],
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
