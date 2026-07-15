import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { getProduct } from "@/data/products";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

function lineKey(productId, tone) {
  return `${productId}::${tone || "default"}`;
}

function loadInitial() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Filter out lines whose product no longer exists.
    return parsed
      .map((line) => ({ ...line }))
      .filter((line) => getProduct(line.productId));
  } catch {
    return [];
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const { productId, tone = "default", quantity = 1 } = action;
      const key = lineKey(productId, tone);
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...state, { key, productId, tone, quantity }];
    }
    case "set-quantity": {
      const { key, quantity } = action;
      if (quantity <= 0) {
        return state.filter((line) => line.key !== key);
      }
      return state.map((line) =>
        line.key === key ? { ...line, quantity } : line
      );
    }
    case "remove": {
      return state.filter((line) => line.key !== action.key);
    }
    case "clear":
      return [];
    case "hydrate":
      return action.lines || [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, null, loadInitial);
  const [isOpen, setIsOpen] = useState(false);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore quota / private mode errors
    }
  }, [lines]);

  const addItem = useCallback((productId, opts = {}) => {
    const { tone = "default", quantity = 1, openDrawer = true } = opts;
    dispatch({ type: "add", productId, tone, quantity });
    if (openDrawer) setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: "set-quantity", key, quantity });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "remove", key });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const decorated = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProduct(line.productId);
          if (!product) return null;
          return {
            ...line,
            product,
            lineTotal: product.price * line.quantity,
          };
        })
        .filter(Boolean),
    [lines]
  );

  const itemCount = useMemo(
    () => decorated.reduce((sum, line) => sum + line.quantity, 0),
    [decorated]
  );

  const subtotal = useMemo(
    () => decorated.reduce((sum, line) => sum + line.lineTotal, 0),
    [decorated]
  );

  const value = useMemo(
    () => ({
      lines: decorated,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      itemCount,
      subtotal,
    }),
    [
      decorated,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      itemCount,
      subtotal,
    ]
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
