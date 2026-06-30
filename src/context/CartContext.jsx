import { createContext, useContext, useEffect, useReducer, useCallback, useMemo, useState } from "react";
import { PRODUCTS, getProductById } from "@/data/products.js";

const STORAGE_KEY = "velmora.cart.v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload || initialState;
    case "ADD": {
      const { productId, variantId, quantity } = action;
      const existing = state.items.find(
        (it) => it.productId === productId && it.variantId === variantId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((it) =>
            it === existing
              ? { ...it, quantity: it.quantity + quantity }
              : it
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          { productId, variantId, quantity, lineId: `${productId}::${variantId}` },
        ],
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((it) => it.lineId !== action.lineId),
      };
    case "SET_QUANTITY":
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((it) => it.lineId !== action.lineId),
        };
      }
      return {
        ...state,
        items: state.items.map((it) =>
          it.lineId === action.lineId
            ? { ...it, quantity: action.quantity }
            : it
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage exactly once.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch (err) {
      console.warn("Failed to hydrate cart from localStorage", err);
    }
    setHydrated(true);
  }, []);

  // Persist on changes.
  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.warn("Failed to persist cart", err);
    }
  }, [state, hydrated]);

  const addToCart = useCallback((productId, variantId = "gold", quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return false;
    const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];
    dispatch({
      type: "ADD",
      productId,
      variantId: variant.id,
      quantity,
    });
    setIsOpen(true);
    return true;
  }, []);

  const removeFromCart = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId });
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QUANTITY", lineId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  // Derived values — joined with full product records.
  const lines = useMemo(() => {
    return state.items
      .map((it) => {
        const product = PRODUCTS.find((p) => p.id === it.productId);
        if (!product) return null;
        const variant = product.variants.find((v) => v.id === it.variantId) || product.variants[0];
        return {
          ...it,
          product,
          variant,
          lineTotal: product.price * it.quantity,
        };
      })
      .filter(Boolean);
  }, [state.items]);

  const itemCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.lineTotal, 0),
    [lines]
  );

  const value = useMemo(
    () => ({
      lines,
      itemCount,
      subtotal,
      isOpen,
      hydrated,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }),
    [lines, itemCount, subtotal, isOpen, hydrated, addToCart, removeFromCart, setQuantity, clearCart, openCart, closeCart, toggleCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
