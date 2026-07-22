import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react";
import { products as catalog } from "@/data/products";

const STORAGE_KEY = "velmora_cart_v1";

const CartContext = createContext(null);

function readStorage() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line) =>
        line &&
        typeof line.id === "string" &&
        typeof line.quantity === "number" &&
        line.quantity > 0
    );
  } catch {
    return [];
  }
}

function writeStorage(lines) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // ignore quota errors
  }
}

function findVariant(product, variantId) {
  return product?.variants?.find((v) => v.id === variantId) || null;
}

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload || [];

    case "ADD": {
      const { productId, variantId, quantity } = action;
      const qty = Math.max(1, Math.min(99, quantity || 1));
      const existing = state.find(
        (line) => line.productId === productId && line.variantId === variantId
      );
      if (existing) {
        return state.map((line) =>
          line === existing
            ? { ...line, quantity: Math.min(99, line.quantity + qty) }
            : line
        );
      }
      return [
        ...state,
        {
          id: `${productId}__${variantId || "default"}`,
          productId,
          variantId: variantId || "default",
          quantity: qty,
        },
      ];
    }

    case "REMOVE":
      return state.filter((line) => line.id !== action.lineId);

    case "SET_QUANTITY": {
      const qty = Math.max(1, Math.min(99, action.quantity || 1));
      return state.map((line) =>
        line.id === action.lineId ? { ...line, quantity: qty } : line
      );
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, []);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage once on mount
  useEffect(() => {
    const stored = readStorage();
    dispatch({ type: "HYDRATE", payload: stored });
    setIsHydrated(true);
  }, []);

  // Persist on changes
  useEffect(() => {
    if (!isHydrated) return;
    writeStorage(lines);
  }, [lines, isHydrated]);

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    dispatch({ type: "ADD", productId, variantId, quantity });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId });
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QUANTITY", lineId, quantity });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const detailedLines = useMemo(() => {
    return lines
      .map((line) => {
        const product = catalog.find((p) => p.id === line.productId);
        if (!product) return null;
        const variant =
          line.variantId === "default"
            ? { id: "default", label: product.tone || "Default" }
            : findVariant(product, line.variantId) || {
                id: line.variantId,
                label: line.variantId,
              };
        return {
          ...line,
          product,
          variant,
          lineTotal: product.price * line.quantity,
        };
      })
      .filter(Boolean);
  }, [lines]);

  const itemCount = useMemo(
    () => detailedLines.reduce((sum, line) => sum + line.quantity, 0),
    [detailedLines]
  );

  const subtotal = useMemo(
    () => detailedLines.reduce((sum, line) => sum + line.lineTotal, 0),
    [detailedLines]
  );

  const value = {
    lines: detailedLines,
    rawLines: lines,
    itemCount,
    subtotal,
    isOpen,
    isHydrated,
    addItem,
    removeItem,
    setQuantity,
    clear,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
