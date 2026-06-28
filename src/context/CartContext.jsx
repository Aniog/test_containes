import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora-cart-v1";

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || [];
    case "add": {
      const { product, variantId, qty } = action.payload;
      const key = `${product.id}::${variantId}`;
      const existing = state.find((line) => line.key === key);
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line,
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
            product.variants.find((v) => v.id === variantId)?.label ||
            variantId,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          qty,
        },
      ];
    }
    case "update": {
      const { key, qty } = action.payload;
      if (qty <= 0) return state.filter((line) => line.key !== key);
      return state.map((line) =>
        line.key === key ? { ...line, qty } : line,
      );
    }
    case "remove":
      return state.filter((line) => line.key !== action.payload.key);
    case "clear":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        dispatch({ type: "hydrate", payload: JSON.parse(raw) });
      }
    } catch {
      // ignore storage errors
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items, hydrated]);

  const addItem = useCallback(
    (product, { variantId = product.variants[0].id, qty = 1 } = {}) => {
      dispatch({ type: "add", payload: { product, variantId, qty } });
      setIsOpen(true);
    },
    [],
  );

  const updateQty = useCallback((key, qty) => {
    dispatch({ type: "update", payload: { key, qty } });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "remove", payload: { key } });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const { itemCount, subtotal } = useMemo(() => {
    const itemCount = items.reduce((sum, l) => sum + l.qty, 0);
    const subtotal = items.reduce((sum, l) => sum + l.qty * l.price, 0);
    return { itemCount, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      updateQty,
      removeItem,
      clear,
      open,
      close,
    }),
    [items, itemCount, subtotal, isOpen, addItem, updateQty, removeItem, clear, open, close],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
