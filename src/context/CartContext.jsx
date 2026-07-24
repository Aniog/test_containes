import React, { createContext, useContext, useMemo, useReducer, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const key = `${action.productId}__${action.variant}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, qty: i.qty + action.qty } : i
        );
      }
      return [
        ...state,
        { key, productId: action.productId, variant: action.variant, qty: action.qty },
      ];
    }
    case "REMOVE":
      return state.filter((i) => i.key !== action.key);
    case "SET_QTY":
      if (action.qty <= 0) return state.filter((i) => i.key !== action.key);
      return state.map((i) => (i.key === action.key ? { ...i, qty: action.qty } : i));
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isCartOpen, setCartOpen] = useState(false);

  const value = useMemo(() => {
    const detailed = items
      .map((i) => ({ ...i, product: getProduct(i.productId) }))
      .filter((i) => i.product);
    const count = detailed.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = detailed.reduce((sum, i) => sum + i.qty * i.product.price, 0);
    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      addItem: (productId, variant = "Gold", qty = 1) => {
        dispatch({ type: "ADD", productId, variant, qty });
        setCartOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
