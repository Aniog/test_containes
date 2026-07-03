import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { getProductById } from "../data/products.js";

const STORAGE_KEY = "velmora.cart.v1";

const CartContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload || initialState;
    case "ADD": {
      const { productId, variantId, quantity } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.productId === productId && item.variantId === variantId
      );
      if (existingIndex > -1) {
        const next = [...state.items];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return { items: next };
      }
      return {
        items: [
          ...state.items,
          { productId, variantId, quantity, lineId: `${productId}-${variantId}` },
        ],
      };
    }
    case "SET_QUANTITY": {
      const { lineId, quantity } = action.payload;
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.lineId !== lineId) };
      }
      return {
        items: state.items.map((i) =>
          i.lineId === lineId ? { ...i, quantity } : i
        ),
      };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.lineId !== action.payload.lineId) };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

function readFromStorage() {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return initialState;
    return { items: parsed.items };
  } catch {
    return initialState;
  }
}

function writeToStorage(state) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const persisted = readFromStorage();
    dispatch({ type: "HYDRATE", payload: persisted });
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) writeToStorage(state);
  }, [state, isReady]);

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    dispatch({ type: "ADD", payload: { productId, variantId, quantity } });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QUANTITY", payload: { lineId, quantity } });
  }, []);

  const removeItem = useCallback((lineId) => {
    dispatch({ type: "REMOVE", payload: { lineId } });
  }, []);

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const decoratedItems = useMemo(() => {
    return state.items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return { ...item, product };
      })
      .filter(Boolean);
  }, [state.items]);

  const subtotal = useMemo(
    () => decoratedItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [decoratedItems]
  );
  const itemCount = useMemo(
    () => decoratedItems.reduce((sum, i) => sum + i.quantity, 0),
    [decoratedItems]
  );

  const value = useMemo(
    () => ({
      items: decoratedItems,
      subtotal,
      itemCount,
      isOpen,
      isReady,
      addItem,
      setQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
    }),
    [decoratedItems, subtotal, itemCount, isOpen, isReady, addItem, setQuantity, removeItem, clear, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
