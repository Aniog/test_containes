import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "velmora-cart";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, { ...action.payload }];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      );
    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        );
      }
      return state.map((item) =>
        item.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id, variant) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id, variant } });
  const updateQuantity = (id, variant, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, variant, quantity } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, itemCount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}