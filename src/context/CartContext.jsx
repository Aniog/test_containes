import React, { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext();

const storedCart = () => {
  try {
    const saved = localStorage.getItem("velmora-cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.material === action.payload.material
      );
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id && item.material === action.payload.material
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter(
        (item) => !(item.id === action.payload.id && item.material === action.payload.material)
      );
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id && item.material === action.payload.material
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], storedCart);

  const persist = useCallback((newCart) => {
    localStorage.setItem("velmora-cart", JSON.stringify(newCart));
  }, []);

  const dispatchAndPersist = useCallback(
    (action) => {
      dispatch(action);
      // We need to compute next state for persistence
      const nextState = cartReducer(cart, action);
      localStorage.setItem("velmora-cart", JSON.stringify(nextState));
    },
    [cart]
  );

  const addItem = useCallback(
    (product, material = "gold", quantity = 1) => {
      dispatchAndPersist({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          material,
          quantity,
        },
      });
    },
    [dispatchAndPersist]
  );

  const removeItem = useCallback(
    (id, material = "gold") => {
      dispatchAndPersist({ type: "REMOVE_ITEM", payload: { id, material } });
    },
    [dispatchAndPersist]
  );

  const updateQuantity = useCallback(
    (id, material, quantity) => {
      dispatchAndPersist({ type: "UPDATE_QUANTITY", payload: { id, material, quantity } });
    },
    [dispatchAndPersist]
  );

  const clearCart = useCallback(() => {
    dispatchAndPersist({ type: "CLEAR_CART" });
  }, [dispatchAndPersist]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
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