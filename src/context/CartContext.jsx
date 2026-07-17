import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "velmora-cart-v1";

const cartKey = (productId, variant) => `${productId}::${variant}`;

const initialState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((i) => getProduct(i.productId)) : [];
  } catch {
    return [];
  }
};

function reducer(items, action) {
  switch (action.type) {
    case "ADD": {
      const key = cartKey(action.productId, action.variant);
      const existing = items.find((i) => cartKey(i.productId, i.variant) === key);
      if (existing) {
        return items.map((i) =>
          cartKey(i.productId, i.variant) === key
            ? { ...i, qty: Math.min(i.qty + action.qty, 99) }
            : i
        );
      }
      return [...items, { productId: action.productId, variant: action.variant, qty: action.qty }];
    }
    case "REMOVE":
      return items.filter((i) => cartKey(i.productId, i.variant) !== action.key);
    case "SET_QTY": {
      if (action.qty <= 0) return items.filter((i) => cartKey(i.productId, i.variant) !== action.key);
      return items.map((i) =>
        cartKey(i.productId, i.variant) === action.key ? { ...i, qty: action.qty } : i
      );
    }
    case "CLEAR":
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, initialState);
  const [isCartOpen, setCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable — cart still works in memory
    }
  }, [items]);

  const value = useMemo(() => {
    const detailed = items.map((i) => ({
      ...i,
      key: cartKey(i.productId, i.variant),
      product: getProduct(i.productId),
    }));
    const count = detailed.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = detailed.reduce((sum, i) => sum + i.qty * (i.product?.price ?? 0), 0);

    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      lastAdded,
      openCart: () => setCartOpen(true),
      closeCart: () => setCartOpen(false),
      addItem: (productId, variant = "gold", qty = 1) => {
        dispatch({ type: "ADD", productId, variant, qty });
        setLastAdded(Date.now());
        setCartOpen(true);
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [items, isCartOpen, lastAdded]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
