import React, { createContext, useContext, useEffect, useReducer, useState, useCallback } from "react";

const STORAGE_KEY = "velmora.cart.v1";

// Lazy initializer — reads localStorage synchronously so the very first
// render already has the hydrated cart. This avoids a StrictMode race where
// the persist effect overwrites storage with the empty initial state before
// the hydration effect ever reads it.
function initFromStorage(initial) {
  if (typeof window === "undefined") return initial;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initial;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.items)) return parsed;
  } catch {
    /* ignore */
  }
  return initial;
}

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity = 1 } = action.payload;
      const key = `${product.id}__${variant || "default"}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            productId: product.id,
            name: product.name,
            price: product.price,
            variant: variant || null,
            quantity,
            image: product.imageQueries?.primary || "",
          },
        ],
      };
    }
    case "REMOVE": {
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) };
    }
    case "SET_QTY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, quantity } : i)),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      // No longer needed (lazy init reads storage directly), kept as a
      // safe fallback in case external code dispatches it.
      return action.payload || state;
    default:
      return state;
  }
}

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);
const CartUiContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, initFromStorage);
  const [isOpen, setIsOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(null);

  // Persist to localStorage whenever state changes.
  // We skip the very first persist so a StrictMode double-mount or an immediate
  // dispatch doesn't accidentally clobber previously-saved state before we
  // even render with it. (Init already came from storage, so there's nothing
  // to persist yet.)
  const isFirstRun = React.useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  const addItem = useCallback(
    (product, opts = {}) => {
      dispatch({
        type: "ADD",
        payload: {
          product,
          variant: opts.variant,
          quantity: opts.quantity || 1,
        },
      });
      setJustAdded({
        productId: product.id,
        name: product.name,
        ts: Date.now(),
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } });
  }, []);

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", payload: { key, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const subtotal = Number(
    state.items.reduce((sum, i) => sum + (Number(i?.price) || 0) * (Number(i?.quantity) || 0), 0)
  );
  const itemCount = state.items.reduce(
    (sum, i) => sum + (Number(i?.quantity) || 0),
    0
  );

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={{ addItem, removeItem, setQuantity, clearCart }}>
        <CartUiContext.Provider
          value={{
            isOpen,
            openCart,
            closeCart,
            toggleCart,
            subtotal,
            itemCount,
            justAdded,
          }}
        >
          {children}
        </CartUiContext.Provider>
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error("useCartState must be used within CartProvider");
  return ctx;
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error("useCartDispatch must be used within CartProvider");
  return ctx;
}

export function useCartUi() {
  const ctx = useContext(CartUiContext);
  if (!ctx) throw new Error("useCartUi must be used within CartProvider");
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
