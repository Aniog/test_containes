import React, { createContext, useContext, useMemo, useReducer, useState, useCallback } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const key = `${action.product.id}:${action.variant}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + action.qty } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            productId: action.product.id,
            name: action.product.name,
            price: action.product.price,
            imgId: action.product.imgId,
            variant: action.variant,
            qty: action.qty,
          },
        ],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case "SET_QTY":
      if (action.qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== action.key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === action.key ? { ...i, qty: action.qty } : i)),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = useCallback((product, variant = "Gold", qty = 1) => {
    dispatch({ type: "ADD", product, variant, qty });
    setIsCartOpen(true);
  }, []);

  const removeItem = useCallback((key) => dispatch({ type: "REMOVE", key }), []);
  const setQty = useCallback((key, qty) => dispatch({ type: "SET_QTY", key, qty }), []);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return {
      items: state.items,
      count,
      subtotal,
      addItem,
      removeItem,
      setQty,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    };
  }, [state, addItem, removeItem, setQty, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
