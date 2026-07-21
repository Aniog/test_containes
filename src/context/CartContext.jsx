import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

const CartContext = createContext(null);

const lineId = (productId, variant) => `${productId}__${variant}`;

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, qty } = action;
      const id = lineId(product.id, variant);
      const existing = state.lines.find((l) => l.id === id);
      if (existing) {
        return {
          lines: state.lines.map((l) =>
            l.id === id ? { ...l, qty: l.qty + qty } : l
          ),
        };
      }
      return {
        lines: [
          ...state.lines,
          {
            id,
            productId: product.id,
            name: product.name,
            price: product.price,
            variant,
            qty,
          },
        ],
      };
    }
    case "REMOVE":
      return { lines: state.lines.filter((l) => l.id !== action.id) };
    case "SET_QTY": {
      if (action.qty <= 0) {
        return { lines: state.lines.filter((l) => l.id !== action.id) };
      }
      return {
        lines: state.lines.map((l) =>
          l.id === action.id ? { ...l, qty: action.qty } : l
        ),
      };
    }
    case "CLEAR":
      return { lines: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { lines: [] });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product, variant = "Gold", qty = 1) => {
    dispatch({ type: "ADD", product, variant, qty });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback(
    (id) => dispatch({ type: "REMOVE", id }),
    []
  );
  const setQty = useCallback(
    (id, qty) => dispatch({ type: "SET_QTY", id, qty }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const { count, subtotal } = useMemo(
    () =>
      state.lines.reduce(
        (acc, l) => ({
          count: acc.count + l.qty,
          subtotal: acc.subtotal + l.qty * l.price,
        }),
        { count: 0, subtotal: 0 }
      ),
    [state.lines]
  );

  const value = useMemo(
    () => ({
      lines: state.lines,
      count,
      subtotal,
      isCartOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      setQty,
      clearCart,
    }),
    [
      state.lines,
      count,
      subtotal,
      isCartOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      setQty,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
