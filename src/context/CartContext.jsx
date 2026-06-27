import React, { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, variant, quantity } = action.payload;
      const key = `${product.id}-${variant}`;
      const existing = state.items[key];
      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            product,
            variant,
            quantity: existing ? existing.quantity + quantity : quantity,
          },
        },
      };
    }
    case "REMOVE_ITEM": {
      const { key } = action.payload;
      const newItems = { ...state.items };
      delete newItems[key];
      return { ...state, items: newItems };
    }
    case "UPDATE_QUANTITY": {
      const { key, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = { ...state.items };
        delete newItems[key];
        return { ...state, items: newItems };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...state.items[key], quantity },
        },
      };
    }
    case "TOGGLE_DRAWER":
      return { ...state, drawerOpen: action.payload ?? !state.drawerOpen };
    default:
      return state;
  }
}

const initialState = { items: {}, drawerOpen: false };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = useCallback((product, variant = "Gold", quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, variant, quantity } });
    dispatch({ type: "TOGGLE_DRAWER", payload: true });
  }, []);

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE_ITEM", payload: { key } });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { key, quantity } });
  }, []);

  const toggleDrawer = useCallback((open) => {
    dispatch({ type: "TOGGLE_DRAWER", payload: open });
  }, []);

  const totalItems = Object.values(state.items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalPrice = Object.values(state.items).reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        drawerOpen: state.drawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
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
