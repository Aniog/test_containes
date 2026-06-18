import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora.cart.v1";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.payload || [];
    case "ADD": {
      const { product, variant = "Gold", quantity = 1 } = action.payload;
      const key = `${product.id}::${variant}`;
      const existing = state.find((item) => item.key === key);
      if (existing) {
        return state.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item
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
          variant,
          quantity,
          imageRefId: product.images[0]?.id,
          imageQueryTitle: product.images[0]?.queryTitle,
          imageQueryDesc: product.images[0]?.queryDesc,
        },
      ];
    }
    case "REMOVE":
      return state.filter((item) => item.key !== action.payload.key);
    case "SET_QTY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) return state.filter((item) => item.key !== key);
      return state.map((item) => (item.key === key ? { ...item, quantity } : item));
    }
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Hydrate
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          dispatch({ type: "INIT", payload: parsed });
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return {
      items,
      subtotal,
      count,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      addItem: (product, variant, quantity = 1) => {
        dispatch({ type: "ADD", payload: { product, variant, quantity } });
        setDrawerOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", payload: { key } }),
      setQuantity: (key, quantity) => dispatch({ type: "SET_QTY", payload: { key, quantity } }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, drawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
