import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, qty } = action.payload;
      const key = `${product.id}__${variant.id}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i,
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
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images?.[0]?.query,
            imageRatio: product.images?.[0]?.ratio,
            imageWidth: 600,
            variant: { id: variant.id, label: variant.label },
            qty,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) };
    case "SET_QTY": {
      const { key, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      };
    }
    case "CLEAR":
      return { ...state, items: [] };
    case "HYDRATE":
      return { ...state, items: action.payload.items || [] };
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
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    } catch {
      // ignore
    }
  }, [state.items]);

  const addItem = useCallback((product, variant, qty = 1) => {
    dispatch({ type: "ADD", payload: { product, variant, qty } });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } });
  }, []);

  const setQty = useCallback((key, qty) => {
    dispatch({ type: "SET_QTY", payload: { key, qty } });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const count = state.items.reduce((acc, i) => acc + i.qty, 0);
    const subtotal = state.items.reduce((acc, i) => acc + i.qty * i.price, 0);
    return {
      items: state.items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQty,
      clear,
      openCart,
      closeCart,
    };
  }, [state, isOpen, addItem, removeItem, setQty, clear, openCart, closeCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
