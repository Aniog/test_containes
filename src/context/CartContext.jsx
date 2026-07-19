import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

function readInitialCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        typeof item.price === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, quantity = 1, variant } = action;
      const lineId = `${product.id}__${variant?.id || "default"}`;
      const existing = state.find((item) => item.lineId === lineId);
      if (existing) {
        return state.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [
        ...state,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          imgId: product.imgId,
          variant: variant || { id: "default", label: "Default" },
          quantity,
        },
      ];
    }
    case "REMOVE":
      return state.filter((item) => item.lineId !== action.lineId);
    case "SET_QTY":
      return state
        .map((item) =>
          item.lineId === action.lineId
            ? { ...item, quantity: Math.max(1, action.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], readInitialCart);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  // Allow ESC to close the drawer
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const addItem = useCallback((product, options = {}) => {
    const { quantity = 1, variant, openDrawer = true } = options;
    dispatch({ type: "ADD", product, quantity, variant });
    setJustAdded(product.id);
    if (openDrawer) setIsOpen(true);
    window.setTimeout(() => setJustAdded(null), 1600);
  }, []);

  const removeItem = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId });
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QTY", lineId, quantity });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const summary = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    );
    return { count, subtotal };
  }, [items]);

  const value = {
    items,
    addItem,
    removeItem,
    setQuantity,
    clear,
    openCart,
    closeCart,
    isOpen,
    justAdded,
    count: summary.count,
    subtotal: summary.subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
