import { createContext, useContext, useMemo, useReducer, useState, useCallback, useEffect } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora:cart:v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload ?? state;
    case "ADD": {
      const { product, tone, quantity = 1 } = action.payload;
      const lineId = `${product.id}__${tone}`;
      const existing = state.items.find((i) => i.lineId === lineId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      const line = {
        lineId,
        id: product.id,
        name: product.name,
        price: product.price,
        tone,
        quantity,
      };
      return { items: [...state.items, line] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.lineId !== action.payload.lineId) };
    case "SET_QTY":
      return {
        items: state.items
          .map((i) =>
            i.lineId === action.payload.lineId
              ? { ...i, quantity: Math.max(0, action.payload.quantity) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  const addToCart = useCallback((product, tone = "gold", quantity = 1) => {
    dispatch({ type: "ADD", payload: { product, tone, quantity } });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((lineId) => {
    dispatch({ type: "REMOVE", payload: { lineId } });
  }, []);

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QTY", payload: { lineId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = state.items.reduce((acc, i) => acc + i.quantity * i.price, 0);
    return { itemCount, subtotal };
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
      totals,
    }),
    [state.items, addToCart, removeFromCart, setQuantity, clearCart, isOpen, openCart, closeCart, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
