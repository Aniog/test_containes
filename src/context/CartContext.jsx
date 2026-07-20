import React, { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext();

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("velmora-cart");
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

const saveCartToStorage = (items) => {
  try {
    localStorage.setItem("velmora-cart", JSON.stringify(items));
  } catch {}
};

const cartReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "ADD_ITEM": {
      const { product, variant, quantity } = action.payload;
      const existingIndex = state.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        newState = state.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newState = [
          ...state,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            variant,
            quantity,
          },
        ];
      }
      break;
    }

    case "REMOVE_ITEM":
      newState = state.filter((_, i) => i !== action.payload.index);
      break;

    case "UPDATE_QUANTITY": {
      const { index, quantity } = action.payload;
      if (quantity <= 0) {
        newState = state.filter((_, i) => i !== index);
      } else {
        newState = state.map((item, i) =>
          i === index ? { ...item, quantity } : item
        );
      }
      break;
    }

    case "CLEAR_CART":
      newState = [];
      break;

    default:
      return state;
  }

  saveCartToStorage(newState);
  return newState;
};

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCartFromStorage);

  const addItem = useCallback((product, variant = "18K Gold", quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, variant, quantity } });
  }, []);

  const removeItem = useCallback((index) => {
    dispatch({ type: "REMOVE_ITEM", payload: { index } });
  }, []);

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { index, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
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
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}