import { createContext, useContext, useReducer, useState } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.id === action.item.id && i.variant === action.item.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id && i.variant === action.item.variant
              ? { ...i, quantity: i.quantity + (action.item.quantity || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: action.item.quantity || 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && i.variant === action.variant)
        ),
      };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.variant === action.variant
            ? { ...i, quantity: Math.max(1, action.quantity) }
            : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
    setIsOpen(true);
  };
  const removeItem = (id, variant) => dispatch({ type: "REMOVE_ITEM", id, variant });
  const updateQty = (id, variant, quantity) =>
    dispatch({ type: "UPDATE_QTY", id, variant, quantity });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
