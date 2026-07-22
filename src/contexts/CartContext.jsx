import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function loadInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, variant, qty, product } = action;
      const key = `${id}__${variant || "default"}`;
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line
        );
      }
      return [
        ...state,
        {
          key,
          id,
          variant: variant || null,
          qty,
          product: {
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            images: product.images,
          },
        },
      ];
    }
    case "REMOVE": {
      return state.filter((line) => line.key !== action.key);
    }
    case "SET_QTY": {
      if (action.qty <= 0) {
        return state.filter((line) => line.key !== action.key);
      }
      return state.map((line) =>
        line.key === action.key ? { ...line, qty: action.qty } : line
      );
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota errors
    }
  }, [items]);

  const totals = useMemo(() => {
    const count = items.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = items.reduce(
      (sum, line) => sum + line.qty * line.product.price,
      0
    );
    return { count, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totals,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, variant, qty = 1) => {
        dispatch({ type: "ADD", id: product.id, variant, qty, product });
        setIsOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [items, totals, isOpen, mobileMenuOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
