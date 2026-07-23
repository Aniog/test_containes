import { createContext, useContext, useMemo, useReducer, useEffect, useState } from "react";
import { getProduct } from "@/data/products";

const CartContext = createContext(null);

const STORAGE_KEY = "velmora-cart-v1";

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const key = `${action.productId}:${action.variant}`;
      const existing = state.find((item) => item.key === key);
      if (existing) {
        return state.map((item) =>
          item.key === key
            ? { ...item, qty: item.qty + action.qty }
            : item
        );
      }
      return [
        ...state,
        {
          key,
          productId: action.productId,
          variant: action.variant,
          qty: action.qty,
        },
      ];
    }
    case "REMOVE":
      return state.filter((item) => item.key !== action.key);
    case "SET_QTY":
      if (action.qty <= 0) {
        return state.filter((item) => item.key !== action.key);
      }
      return state.map((item) =>
        item.key === action.key ? { ...item, qty: action.qty } : item
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  const value = useMemo(() => {
    const detailed = items
      .map((item) => ({ ...item, product: getProduct(item.productId) }))
      .filter((item) => item.product);

    const count = detailed.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = detailed.reduce(
      (sum, item) => sum + item.qty * item.product.price,
      0
    );

    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      toast,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem: (productId, variant = "Gold", qty = 1) => {
        dispatch({ type: "ADD", productId, variant, qty });
        const product = getProduct(productId);
        setToast({
          title: "Added to your cart",
          message: `${product?.name ?? "Item"} · ${variant}`,
        });
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQty: (key, qty) => dispatch({ type: "SET_QTY", key, qty }),
      clearCart: () => dispatch({ type: "CLEAR" }),
      dismissToast: () => setToast(null),
    };
  }, [items, isCartOpen, toast]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
