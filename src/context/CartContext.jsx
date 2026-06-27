import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { getProductById } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart-v1";

const initialState = {
  items: [], // { key, id, name, price, image, variant, quantity }
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: Array.isArray(action.payload) ? action.payload : [] };

    case "ADD": {
      const { product, variant, quantity = 1 } = action.payload;
      const variantId = variant?.id ?? "default";
      const key = `${product.id}::${variantId}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
          isOpen: true,
        };
      }
      const newItem = {
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] ?? "",
        variant: variant ? { id: variant.id, label: variant.label, swatch: variant.swatch } : null,
        quantity,
      };
      return { ...state, items: [...state.items, newItem], isOpen: true };
    }

    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) };

    case "SET_QUANTITY": {
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

    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  // Lazy initialization: read localStorage once at mount time so the very
  // first render already has the persisted items. This avoids the StrictMode
  // race where a persist effect could write the initial empty array and
  // wipe storage before hydration completes.
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    (init) => {
      if (typeof window === "undefined") return init;
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            return { ...init, items: parsed };
          }
        }
      } catch {
        /* ignore */
      }
      return init;
    }
  );

  // Persist on change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      /* ignore */
    }
  }, [state.items]);

  // Lock body scroll when drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = state.isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [state.isOpen]);

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const addToCart = (product, variant, quantity = 1) =>
      dispatch({ type: "ADD", payload: { product, variant, quantity } });

    const removeFromCart = (key) => dispatch({ type: "REMOVE", payload: { key } });

    const setQuantity = (key, quantity) =>
      dispatch({ type: "SET_QUANTITY", payload: { key, quantity } });

    const clearCart = () => dispatch({ type: "CLEAR" });

    const openCart = () => dispatch({ type: "OPEN" });
    const closeCart = () => dispatch({ type: "CLOSE" });
    const toggleCart = () => dispatch({ type: "TOGGLE" });

    const addById = (productId, variantId, quantity = 1) => {
      const product = getProductById(productId);
      if (!product) return;
      const variant =
        product.variants?.find((v) => v.id === variantId) ??
        product.variants?.[0] ??
        null;
      addToCart(product, variant, quantity);
    };

    return {
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addToCart,
      addById,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}