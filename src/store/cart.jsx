import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora_cart_v1";

function loadInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((it) => it && it.productId);
  } catch {
    return [];
  }
}

function persist(items) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota errors
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { productId, tone, quantity = 1 } = action.payload;
      const existing = state.find((it) => it.productId === productId && it.tone === tone);
      if (existing) {
        return state.map((it) =>
          it.productId === productId && it.tone === tone
            ? { ...it, quantity: Math.min(it.quantity + quantity, 99) }
            : it,
        );
      }
      return [...state, { productId, tone, quantity }];
    }
    case "REMOVE": {
      const { productId, tone } = action.payload;
      return state.filter((it) => !(it.productId === productId && it.tone === tone));
    }
    case "SET_QTY": {
      const { productId, tone, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((it) => !(it.productId === productId && it.tone === tone));
      }
      return state.map((it) =>
        it.productId === productId && it.tone === tone
          ? { ...it, quantity: Math.min(quantity, 99) }
          : it,
      );
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], loadInitial);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  useEffect(() => {
    persist(items);
  }, [items]);

  // Hydrate just-added notice
  useEffect(() => {
    if (!justAdded) return;
    const t = setTimeout(() => setJustAdded(null), 2400);
    return () => clearTimeout(t);
  }, [justAdded]);

  const value = useMemo(() => {
    const detailed = items.map((it) => {
      const product = getProductById(it.productId);
      return { ...it, product };
    });
    const count = detailed.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = detailed.reduce((sum, it) => sum + (it.product ? it.product.price * it.quantity : 0), 0);
    return {
      items: detailed,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      justAdded,
      addItem: (productId, tone, quantity = 1) => {
        dispatch({ type: "ADD", payload: { productId, tone, quantity } });
        const product = getProductById(productId);
        setJustAdded(product ? product.name : "Item");
        setIsOpen(true);
      },
      removeItem: (productId, tone) => dispatch({ type: "REMOVE", payload: { productId, tone } }),
      setQuantity: (productId, tone, quantity) =>
        dispatch({ type: "SET_QTY", payload: { productId, tone, quantity } }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, isOpen, justAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

export function formatPrice(value) {
  if (typeof value !== "number") return "";
  return `$${value.toFixed(0)}`;
}
