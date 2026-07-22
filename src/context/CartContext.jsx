import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, color, quantity = 1 } = action.payload;
      const key = `${product.id}::${color}`;
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
            id: product.id,
            product,
            name: product.name,
            price: product.price,
            image: product.images?.[0],
            color,
            quantity,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) };
    case "SET_QTY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.key === action.payload.key
              ? { ...i, quantity: Math.max(1, action.payload.quantity) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return action.payload ?? state;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0);
    return {
      items: state.items,
      itemCount,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product, color, quantity = 1) => {
        dispatch({ type: "ADD", payload: { product, color, quantity } });
        setIsOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", payload: { key } }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "SET_QTY", payload: { key, quantity } }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [state, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
