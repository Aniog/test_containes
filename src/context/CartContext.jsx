import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  useCallback,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora.cart.v1";

function getLineId(productId, variantId) {
  return `${productId}__${variantId || "default"}`;
}

function readInitialState() {
  if (typeof window === "undefined") return { items: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] };
    return { items: parsed.items };
  } catch {
    return { items: [] };
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variantId, quantity } = action;
      const lineId = getLineId(product.id, variantId);
      const existing = state.items.find((i) => i.id === lineId);
      const qty = Math.max(1, quantity || 1);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === lineId
              ? {
                  ...i,
                  image: i.image || product.image,
                  imageAlt: i.imageAlt || product.imageAlt || product.name,
                  quantity: i.quantity + qty,
                }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: lineId,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            variantId: variantId || (product.variants?.[0]?.id ?? null),
            variantLabel:
              product.variants?.find((v) => v.id === variantId)?.label ||
              product.variants?.[0]?.label ||
              "",
            image: product.image,
            imageAlt: product.imageAlt || product.name,
            quantity: qty,
          },
        ],
      };
    }
    case "REMOVE": {
      return { items: state.items.filter((i) => i.id !== action.lineId) };
    }
    case "UPDATE_QTY": {
      const qty = Math.max(1, action.quantity);
      return {
        items: state.items.map((i) =>
          i.id === action.lineId ? { ...i, quantity: qty } : i,
        ),
      };
    }
    case "CLEAR": {
      return { items: [] };
    }
    case "HYDRATE": {
      return { items: action.items || [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, readInitialState);
  const [isOpen, setIsOpen] = useState(false);

  // Persist
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items }),
      );
    } catch {
      /* ignore quota / privacy mode */
    }
  }, [state.items]);

  const addItem = useCallback((product, { variantId, quantity = 1 } = {}) => {
    dispatch({ type: "ADD", product, variantId, quantity });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId });
  }, []);

  const updateQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "UPDATE_QTY", lineId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0,
    );
    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
    };
  }, [
    state.items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}

export { getLineId };