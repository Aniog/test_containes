import React, { createContext, useContext, useReducer, useCallback, useMemo } from "react";

const CartContext = createContext(null);

const initialState = {
  items: [],
  isOpen: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, tone, quantity = 1 } = action.payload;
      const lineId = `${product.id}__${tone || product.tone}`;
      const existing = state.items.find((it) => it.lineId === lineId);
      if (existing) {
        return {
          ...state,
          items: state.items.map((it) =>
            it.lineId === lineId
              ? { ...it, quantity: Math.min(it.quantity + quantity, 99) }
              : it
          ),
          isOpen: true,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            lineId,
            id: product.id,
            name: product.name,
            price: product.price,
            tone: tone || product.tone,
            quantity,
            imgId: product.imgIds?.[0],
            imgTitle: product.imgTitles?.[0] || product.name,
          },
        ],
        isOpen: true,
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((it) => it.lineId !== action.payload.lineId),
      };
    case "SET_QTY": {
      const { lineId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((it) => it.lineId !== lineId),
        };
      }
      return {
        ...state,
        items: state.items.map((it) =>
          it.lineId === lineId
            ? { ...it, quantity: Math.min(quantity, 99) }
            : it
        ),
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
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback(
    (product, tone, quantity = 1) =>
      dispatch({ type: "ADD", payload: { product, tone, quantity } }),
    []
  );
  const removeFromCart = useCallback(
    (lineId) => dispatch({ type: "REMOVE", payload: { lineId } }),
    []
  );
  const setQuantity = useCallback(
    (lineId, quantity) =>
      dispatch({ type: "SET_QTY", payload: { lineId, quantity } }),
    []
  );
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openCart = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), []);

  const value = useMemo(() => {
    const count = state.items.reduce((sum, it) => sum + it.quantity, 0);
    const subtotal = state.items.reduce(
      (sum, it) => sum + it.quantity * it.price,
      0
    );
    return {
      items: state.items,
      isOpen: state.isOpen,
      count,
      subtotal,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [state, addToCart, removeFromCart, setQuantity, clearCart, openCart, closeCart, toggleCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
