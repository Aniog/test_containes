import { createContext, useContext, useMemo, useReducer, useCallback, useEffect, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function loadInitial() {
  if (typeof window === "undefined") return { items: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.items)) return parsed;
  } catch {
    // ignore
  }
  return { items: [] };
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity } = action;
      const key = `${product.id}::${variant || "default"}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
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
            slug: product.slug,
            name: product.name,
            price: product.price,
            variant: variant || product.variants?.[0] || "Gold",
            imgId: product.imgId,
            imgQuery: product.imgQuery,
            quantity,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case "SET_QTY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.key === action.key ? { ...i, quantity: Math.max(0, action.quantity) } : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const addItem = useCallback((product, { variant, quantity = 1, openDrawer = true } = {}) => {
    dispatch({ type: "ADD", product, variant, quantity });
    if (openDrawer) setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key });
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", key, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const count = state.items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = state.items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    return { count, subtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addItem,
      removeItem,
      setQuantity,
      clear,
      isOpen,
      openCart,
      closeCart,
      ...totals,
    }),
    [state.items, addItem, removeItem, setQuantity, clear, isOpen, openCart, closeCart, totals],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
