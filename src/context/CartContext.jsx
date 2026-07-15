import { createContext, useContext, useReducer, useEffect, useCallback } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.color === action.payload.color
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.color === action.payload.color)
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.color === action.payload.color
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
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

function getInitialState() {
  if (typeof window === "undefined") {
    return { items: [], isOpen: false };
  }
  try {
    const saved = localStorage.getItem("velmora-cart");
    if (saved) {
      const parsed = JSON.parse(saved);
      return { items: parsed.items || [], isOpen: false };
    }
  } catch {
    // ignore parse errors
  }
  return { items: [], isOpen: false };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialState);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("velmora-cart", JSON.stringify({ items: state.items }));
  }, [state.items]);

  const addToCart = useCallback((product, color, quantity = 1) => {
    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        color,
        quantity,
        imageQuery: product.imageQuery,
      },
    });
    dispatch({ type: "OPEN" });
  }, []);

  const removeFromCart = useCallback((id, color) => {
    dispatch({ type: "REMOVE", payload: { id, color } });
  }, []);

  const updateQuantity = useCallback((id, color, quantity) => {
    if (quantity < 1) {
      dispatch({ type: "REMOVE", payload: { id, color } });
      return;
    }
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, color, quantity } });
  }, []);

  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);
  const openCart = useCallback(() => dispatch({ type: "OPEN" }), []);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        subtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
