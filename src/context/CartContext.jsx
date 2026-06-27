import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

function loadInitial() {
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
    case "add": {
      const { product, variantId, quantity } = action;
      const key = `${product.id}__${variantId}`;
      const existing = state.find((item) => item.key === key);
      if (existing) {
        return state.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variantId,
          variantLabel:
            product.variants?.find((v) => v.id === variantId)?.label || "",
          image: product.images?.[0] || null,
          quantity,
        },
      ];
    }
    case "remove":
      return state.filter((item) => item.key !== action.key);
    case "setQuantity":
      return state
        .map((item) =>
          item.key === action.key
            ? { ...item, quantity: Math.max(1, action.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "clear":
      return [];
    case "hydrate":
      return Array.isArray(action.items) ? action.items : [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore storage errors */
    }
  }, [items]);

  const addItem = useCallback((product, variantId = "gold", quantity = 1) => {
    dispatch({ type: "add", product, variantId, quantity });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "remove", key });
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "setQuantity", key, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, setQuantity, clear, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
