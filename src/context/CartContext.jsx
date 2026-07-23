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
      const { product, quantity, variant } = action;
      const key = `${product.id}::${variant || "default"}`;
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          tone: product.tone,
          variant: variant || product.tone || "gold",
          artwork: product.artwork,
          quantity,
        },
      ];
    }
    case "REMOVE": {
      return state.filter((line) => line.key !== action.key);
    }
    case "SET_QTY": {
      return state
        .map((line) =>
          line.key === action.key
            ? { ...line, quantity: Math.max(0, action.quantity) }
            : line
        )
        .filter((line) => line.quantity > 0);
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be unavailable (Safari private, etc.) — ignore.
    }
  }, [items]);

  const summary = useMemo(() => {
    const count = items.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = items.reduce(
      (sum, line) => sum + line.price * line.quantity,
      0
    );
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 8;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      summary,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product, { quantity = 1, variant } = {}) =>
        dispatch({ type: "ADD", product, quantity, variant }),
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQuantity: (key, quantity) => dispatch({ type: "SET_QTY", key, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    [items, summary, isOpen]
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
